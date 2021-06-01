import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import KitInterface from '../../library/ton/utils/interfaces/KitInterface'
import Ton from '../../library/ton/utils/Ton'
import {KeyPair} from '@tonclient/core/dist/modules'
import TonKeysFile from '../../library/ton/utils/node/TonKeysFile'
import TerminalContractInfo from '../../library/scripts/base/TerminalContractInfo'
import terminalDeploy from '../../library/scripts/base/functions/terminalDeploy'
import colors from 'colors'
import config from '../../configs/config'
import GiverV2 from '../../library/ton/contracts/GiverV2'
import AuctionRoot from '../../contracts/AuctionRoot'

async function run(): Promise<void> {
    TonClient.useBinaryLibrary(libNode)
    const kit: KitInterface = Ton.kit.create(config.net.deploy)
    /*const rootKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(
        config.net.deploy.contracts.auctionRoot.keyFile,
        kit.client
    )*/
    /*const rootKeys: KeyPair = 
        {public: '2d63aa848a4ddef7369288ab8552d745bb2355c29735c3eb21e2086b473e5ddc',
         secret: '578eb00d401b10fec61f3f89320137bf820cbab60af33de09e9e5d22ac3676be'}*/
    const rootKeys: KeyPair = 
        {public: '14b14ad580f32938e5e55e86d7252d3b60f89d7b0ac5c38398ccc04f55e132ab',
         secret: 'c75ca9e512edb5d810d5f12befccd783ed80e7b989f6ad2b75003b54df2b5149'}
    const giverKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(config.net.deploy.keys.giver, kit.client)
    const auctionRoot: AuctionRoot = new AuctionRoot(kit, rootKeys)
    const giver: GiverV2 = new GiverV2(kit, giverKeys)

    await TerminalContractInfo.logNetwork(config.net.deploy)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('AuctionRoot', auctionRoot, config.net.deploy.locale)
    await TerminalContractInfo.log()

    const balance: number = parseInt(await auctionRoot.getBalance())
    if (balance === 0) {
        await TerminalContractInfo.log('SENDING...')
        await giver.sendTransaction(await auctionRoot.calculateAddress(), config.net.deploy.contracts.auctionRoot.giverDeposit)
        await auctionRoot.waitForTransaction()
        await TerminalContractInfo.log(colors.green('SENT'))
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('AuctionRoot', auctionRoot, config.net.deploy.locale)
        await TerminalContractInfo.log()
    }

    const canDeploy: boolean = await terminalDeploy(auctionRoot)
    if (!canDeploy)
        process.exit()

    const auctionRootConfig: any = config.net.deploy.contracts.auctionRoot
    await auctionRoot.deploy(
        auctionRootConfig.manager,
        auctionRootConfig.creationMinValue,
        auctionRootConfig.creationFee,
        Ton.hex.string(auctionRootConfig.name),
        Ton.hex.string(auctionRootConfig.symbol)
    )
    await TerminalContractInfo.log(colors.green('DEPLOYED'))
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('AuctionRoot', auctionRoot, config.net.deploy.locale)
    await TerminalContractInfo.log()
    process.exit()
}
run().then()