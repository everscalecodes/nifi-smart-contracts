import offerRootData from '../contracts/trade/OfferRoot'
import offerData from '../contracts/trade/Offer'
import OfferRoot from '../contracts/OfferRoot'
import OfferToken from '../contracts/Offer'
import config from '../configs/config'
import ArtRoot from '../contracts/ArtRoot'
import {KeyPair} from '@tonclient/core/dist/modules'
import artTokenData from '../contracts/tokens/art/ArtToken'
import artRootData from '../contracts/tokens/art/ArtRoot'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import ArtToken from '../contracts/ArtToken'
import {Ton} from '../library'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import SafeMultisigWallet from '../library/ton/contracts/SafeMultisigWallet'
import TonKeysFile from '../library/ton/utils/node/TonKeysFile'
import GiverV2 from '../library/ton/contracts/GiverV2'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.create(config.net.test)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



it('Valid', async done => {
    const newHash: string = '0x0000000000000000000000000000000000000000000000000000001234567890'

    const tip3Seller_multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const tip3Seller_multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, tip3Seller_multisigKeys)
    const giverKeys: KeyPair = TonKeysFile.read(config.net.test.keys.giver)
    const giverContract: GiverV2 = new GiverV2(kit, giverKeys)
    const rootKeys: KeyPair = await Ton.keys.random(kit.client)
    const artRoot: ArtRoot = new ArtRoot(kit, rootKeys)
    const artToken: ArtToken = new ArtToken(kit, await artRoot.calculateAddress(), 0, rootKeys)

    await giverContract.sendTransaction(await tip3Seller_multisig.calculateAddress(), 10_000_000_000)
    await tip3Seller_multisig.deploy([Ton.hex.x0(tip3Seller_multisigKeys.public)], 1)
    //deploy ArtRoot
    await giverContract.sendTransaction(await artRoot.calculateAddress(), 10_000_000_000)
    await artRoot.deploy(
        '0:0000000000000000000000000000000000000000000000000000000000000001',
        1_000_000_000,
        100_000_000,
        Ton.hex.string('Art'),
        Ton.hex.string('ART')
    )
    //create tip3 token
    await tip3Seller_multisig.callAnotherContract(
        await artRoot.calculateAddress(),
        1_000_000_000,
        true,
        0,
        artRootData.abi,
        'create',
        {
            owner: await tip3Seller_multisig.calculateAddress(),
            manager: '0:0000000000000000000000000000000000000000000000000000000000000001',
            managerUnlockTime: 0,
            creator: await tip3Seller_multisig.calculateAddress(),
            creatorFees: 0,
            hash: '0x0000000000000000000000000000000000000000000000000000000000000000'
        },
        tip3Seller_multisigKeys
    )
    await artToken.waitForTransaction()
    //set hash to token
    await tip3Seller_multisig.callAnotherContract(
        await artToken.calculateAddress(),
        1_000_000_000,
        true,
        0,
        artTokenData.abi,
        'addHash',
        {
            hash: newHash
        },
        tip3Seller_multisigKeys
    )
    await artToken.waitForTransaction()
    expect((await artToken.getArtInfo()).hash).toBe(newHash)
    //^tip3 token deployed
    //create buyer 1
    const tip3Buyer1_multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const tip3Buyer1_multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, tip3Buyer1_multisigKeys)
    await giverContract.sendTransaction(await tip3Buyer1_multisig.calculateAddress(), 10_000_000_000)
    await tip3Buyer1_multisig.deploy([Ton.hex.x0(tip3Buyer1_multisigKeys.public)], 1)

    const offerRoot: OfferRoot = new OfferRoot(kit, rootKeys)
    const offer: OfferToken = new OfferToken(kit, await offerRoot.calculateAddress(), 0, rootKeys)
    const offer_address = await offer.calculateAddress();

    //deploy offer root
    await giverContract.sendTransaction(await offerRoot.calculateAddress(), 10_000_000_000)
    await offerRoot.deploy(
        '0:0000000000000000000000000000000000000000000000000000000000000001',
        1_000_000_000,
        100_000_000,
        100_000_000,
        Ton.hex.string('Offer'),
        Ton.hex.string('OFFER')
    )
    //deploy offer
    await tip3Buyer1_multisig.callAnotherContract(
        await offerRoot.calculateAddress(),
        1_500_000_000,
        true,
        0,
        offerRootData.abi,
        'create',
        {
            creator:  await tip3Buyer1_multisig.calculateAddress(),
            token: await artToken.calculateAddress(),
            price: 1_000_000_000,
            endTime: Math.round(new Date().getTime() / 1000) + 120,
        },
        tip3Buyer1_multisigKeys
    )
    await offer.waitForTransaction()

    expect((await offer.getInfo()).creator).toBe(await tip3Buyer1_multisig.calculateAddress())

    //accept transactoion
    //lock manager
    await tip3Seller_multisig.callAnotherContract(
        await artToken.calculateAddress(),
        1_000_000_000,
        true,
        0,
        artTokenData.abi,
        'lockManager',
        {
            manager: offer_address,
            unlockTime: Math.round(new Date().getTime() / 1000) + 5000
        },
        tip3Seller_multisigKeys
    )
    await artToken.waitForTransaction()

    expect((await artToken.getInfo()).manager).toBe(offer_address)
    expect((await artToken.getInfo()).owner).toBe(await tip3Seller_multisig.calculateAddress())

    //accept
    await tip3Seller_multisig.callAnotherContract(
        offer_address,
        510_000_000,
        true,
        0,
        offerData.abi,
        'acceptOffer',
        {
        },
        tip3Seller_multisigKeys
    )
    await offer.waitForTransaction()
    await artToken.waitForTransaction()
    await offer.waitForTransaction()

    await sleep(5000);

    //expect((await artToken.getInfo()).manager).toBe(offer_address)
    expect((await artToken.getInfo()).owner).toBe(await tip3Buyer1_multisig.calculateAddress())

    done()
}, 300000)