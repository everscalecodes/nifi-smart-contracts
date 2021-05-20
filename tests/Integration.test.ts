import auctionRootData from '../contracts/trade/DirectAuctionRoot'
import auctionData from '../contracts/trade/DirectAuction'
import AuctionRoot from '../contracts/AuctionRoot'
import AuctionToken from '../contracts/Auction'
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

    const auctionRoot: AuctionRoot = new AuctionRoot(kit, rootKeys)
    const auction: AuctionToken = new AuctionToken(kit, await auctionRoot.calculateAddress(), 0, rootKeys)
    const auction_address = await auction.calculateAddress();

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
    //deploy AuctionRoot
    await giverContract.sendTransaction(await auctionRoot.calculateAddress(), 10_000_000_000)
    await auctionRoot.deploy(
        '0:0000000000000000000000000000000000000000000000000000000000000001',
        1_000_000_000,
        100_000_000,
        Ton.hex.string('Auction'),
        Ton.hex.string('AUCTION')
    )
    //deploy auction whith ArtToken
    await tip3Seller_multisig.callAnotherContract(
        await auctionRoot.calculateAddress(),
        1_000_000_000,
        true,
        0,
        auctionRootData.abi,
        'create',
        {
            creator:  await tip3Seller_multisig.calculateAddress(),
            token: await artToken.calculateAddress(),
            startBid: 1_000_000_000,
            stepBid: 500_000_000,
            feeBid: 200_000_000,
            startTime: Math.round(new Date().getTime() / 1000) - 60,
            endTime: Math.round(new Date().getTime() / 1000) + 60,
        },
        tip3Seller_multisigKeys
    )
    await auction.waitForTransaction()
    //lock manager
    await tip3Seller_multisig.callAnotherContract(
        await artToken.calculateAddress(),
        1_000_000_000,
        true,
        0,
        artTokenData.abi,
        'lockManager',
        {
            manager: auction_address,
            unlockTime: Math.round(new Date().getTime() / 1000) + 300
        },
        tip3Seller_multisigKeys
    )
    await artToken.waitForTransaction()

    expect((await artToken.getInfo()).manager).toBe(auction_address)
    expect((await artToken.getInfo()).owner).toBe(await tip3Seller_multisig.calculateAddress())

    const SellerStartBalance = parseInt(await tip3Seller_multisig.getBalance());
    //create buyer 1
    const tip3Buyer1_multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const tip3Buyer1_multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, tip3Buyer1_multisigKeys)
    await giverContract.sendTransaction(await tip3Buyer1_multisig.calculateAddress(), 10_000_000_000)
    await tip3Buyer1_multisig.deploy([Ton.hex.x0(tip3Buyer1_multisigKeys.public)], 1)
    const tip3Buyer1_address = await tip3Buyer1_multisig.calculateAddress();
    //create buyer 2
    const tip3Buyer2_multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const tip3Buyer2_multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, tip3Buyer2_multisigKeys)
    await giverContract.sendTransaction(await tip3Buyer2_multisig.calculateAddress(), 10_000_000_000)
    await tip3Buyer2_multisig.deploy([Ton.hex.x0(tip3Buyer2_multisigKeys.public)], 1)
    const tip3Buyer2_address = await tip3Buyer2_multisig.calculateAddress();

    //buyer1 make bid 0.5 ton
    await tip3Buyer1_multisig.callAnotherContract(
        auction_address,
        1_000_000_000,
        true,
        0,
        auctionData.abi,
        'bid',
        {
        },
        tip3Buyer1_multisigKeys
    )
    await auction.waitForTransaction()
    expect((await auction.getInfo()).curBid.bider).not.toBe(tip3Buyer1_address)

    //buyer2  make bid 4 ton
    await tip3Buyer2_multisig.callAnotherContract(
        await auction.calculateAddress(),
        4_000_000_000,
        true,
        0,
        auctionData.abi,
        'bid',
        {
        },
        tip3Buyer2_multisigKeys
    )
    await auction.waitForTransaction()
    expect((await auction.getInfo()).curBid.bider).toBe(tip3Buyer2_address)
    expect(parseInt(await tip3Buyer2_multisig.getBalance())).toBeLessThan(6_000_000_000)

    //buyer1  make bid 5 ton
    await tip3Buyer1_multisig.callAnotherContract(
        await auction.calculateAddress(),
        5_000_000_000,
        true,
        0,
        auctionData.abi,
        'bid',
        {
        },
        tip3Buyer1_multisigKeys
    )
    await auction.waitForTransaction()
    await tip3Buyer2_multisig.waitForTransaction()
    sleep(10000);//sleep for multisig balance update...
    expect((await auction.getInfo()).curBid.bider).toBe(tip3Buyer1_address)
    expect(parseInt(await tip3Buyer2_multisig.getBalance())).toBeGreaterThan(9_000_000_000)
    
    console.log("sleep for 60 sec");
    await sleep(60*1000);
    console.log("gogogo");
    //time of auction ended and buyer1 win auction
    await auction.finish();
    await artToken.waitForTransaction()
    expect((await artToken.getInfo()).owner).toBe(await tip3Buyer1_multisig.calculateAddress())
    expect(parseInt(await tip3Buyer1_multisig.getBalance())).toBeLessThan(5_000_000_000)
    
    const SellerBalance = parseInt(await tip3Seller_multisig.getBalance());
    expect(SellerBalance).toBeGreaterThanOrEqual(SellerStartBalance+5_000_000_000);

    expect(await auction.getBalance()).toBeNull()

    done()
}, 300000)