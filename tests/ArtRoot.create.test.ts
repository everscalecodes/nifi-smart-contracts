import config from '../configs/config'
import LocalNodeGiverContract from '../common/classes/LocalNodeGiverContract'
import ArtRootContract from '../common/classes/ArtRootContract'
import Ton from '../common/classes/utils/Ton'
import SafeMultisigWalletContract from '../common/classes/SafeMultisigWalletContract'
import {KeyPair} from '@tonclient/core/dist/modules'
import artRootData from '../contracts/tokens/art/ArtRoot'

Ton.url = config.net.test.url
Ton.timeout = config.net.test.timeout

it('Valid', async done => {
    const manager: string = '0:0000000000000000000000000000000000000000000000000000000000000001'

    const multisigKeys: KeyPair = await Ton.randomKeys()
    const multisig: SafeMultisigWalletContract = new SafeMultisigWalletContract(multisigKeys)
    const giverContract: LocalNodeGiverContract = new LocalNodeGiverContract()
    const artRoot: ArtRootContract = new ArtRootContract(await Ton.randomKeys())

    await giverContract.sendGrams(10_000_000_000, await multisig.calculateAddress())
    await multisig.deploy([Ton.x0(multisigKeys.public)], 1)

    await giverContract.sendGrams(10_000_000_000, await artRoot.calculateAddress())
    const artRootDeployResult: boolean = await artRoot.deploy(
        manager,
        1_000_000_000,
        100_000_000,
        Ton.stringToHex('Art'),
        Ton.stringToHex('ART')
    )

    await multisig.callAnotherContract(
        await artRoot.calculateAddress(),
        1_000_000_000,
        false,
        1,
        artRootData.abi,
        'create',
        {
            owner: '0x0000000000000000000000000000000000000000000000000000000000000001',
            manager: '0:0000000000000000000000000000000000000000000000000000000000000001',
            managerUnlockTime: 0,
            creator:'0x0000000000000000000000000000000000000000000000000000000000000001',
            creatorFees:0,
            hash: '0x0000000000000000000000000000000000000000000000000000000000000000'
        },
        multisigKeys
    )

    // TODO read info from token.

    done()
}, 30000)