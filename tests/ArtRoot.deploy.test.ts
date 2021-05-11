import config from '../configs/config'
import ArtRoot from '../contracts/ArtRoot'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import TonKeysFile from '../library/ton/utils/node/TonKeysFile'
import {Ton} from '../library'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import GiverV2 from '../library/ton/contracts/GiverV2'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.create(config.net.test)

it('Valid', async done => {
    const manager: string = '0:0000000000000000000000000000000000000000000000000000000000000001'

    const giverKeys: KeyPair = TonKeysFile.read(config.net.test.keys.giver)
    const giverContract: GiverV2 = new GiverV2(kit, giverKeys)
    const artRoot: ArtRoot = new ArtRoot(kit, await Ton.keys.random(kit.client))

    await giverContract.sendTransaction(await artRoot.calculateAddress(), 10_000_000_000)
    const artRootDeployResult: boolean = await artRoot.deploy(
        manager,
        1_000_000_000,
        100_000_000,
        Ton.hex.string('Art'),
        Ton.hex.string('ART')
    )

    expect(artRootDeployResult).toBeTruthy()
    expect(await artRoot.getManager()).toBe(manager)
    done()
}, 30000)