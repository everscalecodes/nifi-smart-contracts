import config from '../configs/config'
import GiverV2 from '../common/classes/GiverV2'
import ArtRoot from '../common/classes/ArtRoot'
import Ton from '../common/classes/utils/Ton'
import {KeyPair} from '@tonclient/core/dist/modules'
import TonKeysFileReader from '../common/classes/utils/TonKeysFileReader'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import KitInterface from '../common/classes/utils/interface/KitInterface'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.getKit(config.net.test)

it('Valid', async done => {
    const manager: string = '0:0000000000000000000000000000000000000000000000000000000000000001'

    const giverKeys: KeyPair = TonKeysFileReader.read(config.net.test.giverKeys)
    const giverContract: GiverV2 = new GiverV2(kit, giverKeys)
    const artRoot: ArtRoot = new ArtRoot(kit, await Ton.keys.random(kit.client))

    await giverContract.sendTransaction(await artRoot.calculateAddress(), 10_000_000_000)
    const artRootDeployResult: boolean = await artRoot.deploy(
        manager,
        1_000_000_000,
        100_000_000,
        Ton.string.stringToHex('Art'),
        Ton.string.stringToHex('ART')
    )

    expect(artRootDeployResult).toBeTruthy()
    expect(await artRoot.getManager()).toBe(manager)
    done()
}, 30000)