import config from '../configs/config'
import LocalNodeGiver from '../common/classes/LocalNodeGiver'
import ArtRoot from '../common/classes/ArtRoot'
import Ton from '../common/classes/utils/Ton'

Ton.url = config.net.test.url
Ton.timeout = config.net.test.timeout

it('Valid', async done => {
    const manager: string = '0:0000000000000000000000000000000000000000000000000000000000000001'

    const giverContract: LocalNodeGiver = new LocalNodeGiver()
    const artRoot: ArtRoot = new ArtRoot(await Ton.randomKeys())

    await giverContract.sendGrams(10_000_000_000, await artRoot.calculateAddress())
    const artRootDeployResult: boolean = await artRoot.deploy(
        manager,
        1_000_000_000,
        100_000_000,
        Ton.stringToHex('Art'),
        Ton.stringToHex('ART')
    )

    expect(artRootDeployResult).toBeTruthy()
    expect(await artRoot.getManager()).toBe(manager)
    done()
}, 30000)