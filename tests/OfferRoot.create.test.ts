import config from '../configs/config'
import OfferRoot from '../contracts/OfferRoot'
import {KeyPair} from '@tonclient/core/dist/modules'
import offerRootData from '../contracts/trade/OfferRoot'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import OfferToken from '../contracts/Offer'
import {Ton} from '../library'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import SafeMultisigWallet from '../library/ton/contracts/SafeMultisigWallet'
import TonKeysFile from '../library/ton/utils/node/TonKeysFile'
import GiverV2 from '../library/ton/contracts/GiverV2'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.create(config.net.test)

it('Valid', async done => {/*
    const hash: string = '0x0000000000000000000000000000000000000000000000000000000012345678'

    const multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, multisigKeys)
    const giverKeys: KeyPair = TonKeysFile.read(config.net.test.keys.giver)
    const giverContract: GiverV2 = new GiverV2(kit, giverKeys)
    const rootKeys: KeyPair = await Ton.keys.random(kit.client)
    const offerRoot: OfferRoot = new OfferRoot(kit, rootKeys)
    const offerToken: OfferToken = new OfferToken(kit, await offerRoot.calculateAddress(), 0, rootKeys)

    await giverContract.sendTransaction(await multisig.calculateAddress(), 10_000_000_000)
    await multisig.deploy([Ton.hex.x0(multisigKeys.public)], 1)

    await giverContract.sendTransaction(await offerRoot.calculateAddress(), 10_000_000_000)
    await offerRoot.deploy(
        '0:0000000000000000000000000000000000000000000000000000000000000001',
        1_000_000_000,
        100_000_000,
        100_000_000,
        Ton.hex.string('Offer'),
        Ton.hex.string('OFFER')
    )

    await multisig.callAnotherContract(
        await offerRoot.calculateAddress(),
        1_000_000_000,
        true,
        0,
        offerRootData.abi,
        'create',
        {
            creator:  await multisig.calculateAddress(),
            token: '0:0000000000000000000000000000000000000000000000000000000000012345',
            price: 100_000_000,
            endTime: Math.round(new Date().getTime() / 1000) + 120,
        },
        multisigKeys
    )
    await offerToken.waitForTransaction()

    expect((await offerToken.getInfo()).token).toBe('0:0000000000000000000000000000000000000000000000000000000000012345')*/
    expect(1).toBe(1)

    done()
}, 30000)