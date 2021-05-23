import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import KitInterface from '../../library/ton/utils/interfaces/KitInterface'
import Ton from '../../library/ton/utils/Ton'
import {KeyPair} from '@tonclient/core/dist/modules'
import TonKeysFile from '../../library/ton/utils/node/TonKeysFile'
import TerminalContractInfo from '../../library/scripts/base/TerminalContractInfo'
import config from '../../configs/config'
import OfferRoot from '../../contracts/OfferRoot'

async function run(): Promise<void> {
    TonClient.useBinaryLibrary(libNode)
    const kit: KitInterface = Ton.kit.create(config.net.deploy)
    const keys: KeyPair = await TonKeysFile.createRandomIfNotExist(
        config.net.deploy.contracts.offerRoot.keyFile,
        kit.client
    )
    const offerRoot: OfferRoot = new OfferRoot(kit, keys)
    await TerminalContractInfo.logNetwork(config.net.deploy)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('OfferRoot', offerRoot, config.net.deploy.locale)
    process.exit()
}
run().then()