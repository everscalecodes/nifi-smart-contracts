import config from '../configs/config'
import LocalNodeGiverContract from '../common/classes/LocalNodeGiverContract'
import ArtRootContract from '../common/classes/ArtRootContract'
import Ton from '../common/classes/utils/Ton'

Ton.url = config.net.test.url
Ton.timeout = config.net.test.timeout

it('Valid', async done => {
    const manager: string = '0:0000000000000000000000000000000000000000000000000000000000000001'

    const giverContract: LocalNodeGiverContract = new LocalNodeGiverContract()
    const artRoot: ArtRootContract = new ArtRootContract(await Ton.randomKeys())

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