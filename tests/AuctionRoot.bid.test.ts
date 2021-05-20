import config from '../configs/config'
import AuctionRoot from '../contracts/AuctionRoot'
import {KeyPair} from '@tonclient/core/dist/modules'
import auctionRootData from '../contracts/trade/DirectAuctionRoot'
import auctionData from '../contracts/trade/DirectAuction'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import AuctionToken from '../contracts/Auction'
import {Ton} from '../library'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import SafeMultisigWallet from '../library/ton/contracts/SafeMultisigWallet'
import TonKeysFile from '../library/ton/utils/node/TonKeysFile'
import GiverV2 from '../library/ton/contracts/GiverV2'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.create(config.net.test)

it('Valid', async done => {
    const hash: string = '0x0000000000000000000000000000000000000000000000000000000012345678'

    const multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, multisigKeys)
    const giverKeys: KeyPair = TonKeysFile.read(config.net.test.keys.giver)
    const giverContract: GiverV2 = new GiverV2(kit, giverKeys)
    const rootKeys: KeyPair = await Ton.keys.random(kit.client)
    const auctionRoot: AuctionRoot = new AuctionRoot(kit, rootKeys)
    const auctionToken: AuctionToken = new AuctionToken(kit, await auctionRoot.calculateAddress(), 0, rootKeys)

    await giverContract.sendTransaction(await multisig.calculateAddress(), 10_000_000_000)
    await multisig.deploy([Ton.hex.x0(multisigKeys.public)], 1)

    await giverContract.sendTransaction(await auctionRoot.calculateAddress(), 10_000_000_000)
    await auctionRoot.deploy(
        '0:0000000000000000000000000000000000000000000000000000000000000001',
        1_000_000_000,
        100_000_000,
        Ton.hex.string('Art'),
        Ton.hex.string('ART')
    )
    
    await multisig.callAnotherContract(
        await auctionRoot.calculateAddress(),
        1_000_000_000,
        true,
        0,
        auctionRootData.abi,
        'create',
        {
            creator:  await multisig.calculateAddress(),
            token: '0:0000000000000000000000000000000000000000000000000000000000012345',
            startBid: 100_000_000,
            stepBid: 100_000_000,
            feeBid: 100_000_000,
            startTime: Math.round(new Date().getTime() / 1000) - 60,
            endTime: Math.round(new Date().getTime() / 1000) + 120,
        },
        multisigKeys
    )
    await auctionToken.waitForTransaction()

    await multisig.callAnotherContract(
        await auctionToken.calculateAddress(),
        1_000_000_000,
        true,
        0,
        auctionData.abi,
        'bid',
        {
        },
        multisigKeys
    )
    await auctionToken.waitForTransaction()
    
    expect((await auctionToken.getInfo()).curBid.bider).toBe(await multisig.calculateAddress())

    done()
}, 30000)