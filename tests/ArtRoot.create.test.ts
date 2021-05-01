import config from '../configs/config'
import GiverV2 from '../common/classes/GiverV2'
import ArtRoot from '../common/classes/ArtRoot'
import Ton from '../common/classes/utils/Ton'
import SafeMultisigWallet from '../common/classes/SafeMultisigWallet'
import {KeyPair} from '@tonclient/core/dist/modules'
import artRootData from '../contracts/tokens/art/ArtRoot'
import TonKeysFileReader from '../common/classes/utils/TonKeysFileReader'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import KitInterface from '../common/classes/utils/interface/KitInterface'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.getKit(config.net.test)

it('Valid', async done => {
    const manager: string = '0:0000000000000000000000000000000000000000000000000000000000000001'

    const multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, multisigKeys)
    const giverKeys: KeyPair = TonKeysFileReader.read(config.net.test.giverKeys)
    const giverContract: GiverV2 = new GiverV2(kit, giverKeys)
    const artRoot: ArtRoot = new ArtRoot(kit, await Ton.keys.random(kit.client))

    await giverContract.sendTransaction(await multisig.calculateAddress(), 10_000_000_000)
    await multisig.deploy([Ton.string.x0(multisigKeys.public)], 1)

    await giverContract.sendTransaction(await artRoot.calculateAddress(), 10_000_000_000)
    await artRoot.deploy(
        manager,
        1_000_000_000,
        100_000_000,
        Ton.string.stringToHex('Art'),
        Ton.string.stringToHex('ART')
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
            creator: '0x0000000000000000000000000000000000000000000000000000000000000001',
            creatorFees: 0,
            hash: '0x0000000000000000000000000000000000000000000000000000000000000000'
        },
        multisigKeys
    )

    // TODO read info from token.

    done()
}, 30000)