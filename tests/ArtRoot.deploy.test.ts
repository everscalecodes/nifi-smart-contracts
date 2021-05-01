import config from '../configs/config'
import GiverV2 from '../common/classes/GiverV2'
import ArtRoot from '../common/classes/ArtRoot'
import Ton from '../common/classes/utils/Ton'

Ton.url = config.net.test.url
Ton.timeout = config.net.test.timeout

it('Valid', async done => {
    const manager: string = '0:0000000000000000000000000000000000000000000000000000000000000001'

    const giverContract: GiverV2 = new GiverV2(config.net.test.giverKeys)
    const artRoot: ArtRoot = new ArtRoot(await Ton.randomKeys())

    await giverContract.sendTransaction(await artRoot.calculateAddress(),10_000_000_000)
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