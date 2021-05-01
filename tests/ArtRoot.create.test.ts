import config from '../configs/config'
import GiverV2 from '../common/classes/GiverV2'
import ArtRoot from '../common/classes/ArtRoot'
import Ton from '../common/classes/utils/Ton'
import SafeMultisigWallet from '../common/classes/SafeMultisigWallet'
import {KeyPair} from '@tonclient/core/dist/modules'
import artRootData from '../contracts/tokens/art/ArtRoot'
import TonKeysFileReader from "../common/classes/utils/TonKeysFileReader";

Ton.url = config.net.test.url
Ton.timeout = config.net.test.timeout

it('Valid', async done => {
    const manager: string = '0:0000000000000000000000000000000000000000000000000000000000000001'

    const multisigKeys: KeyPair = await Ton.randomKeys()
    const multisig: SafeMultisigWallet = new SafeMultisigWallet(multisigKeys)
    const giverKeys: KeyPair = TonKeysFileReader.read(config.net.test.giverKeys)
    const giverContract: GiverV2 = new GiverV2(giverKeys)
    const artRoot: ArtRoot = new ArtRoot(await Ton.randomKeys())

    await giverContract.sendTransaction(await multisig.calculateAddress(), 10_000_000_000)
    await multisig.deploy([Ton.x0(multisigKeys.public)], 1)

    await giverContract.sendTransaction(await artRoot.calculateAddress(), 10_000_000_000)
    await artRoot.deploy(
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