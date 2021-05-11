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
import ArtToken, {ArtInfo} from '../common/classes/ArtToken'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.getKit(config.net.test)

it('Valid', async done => {
    const newHash: string = '0x0000000000000000000000000000000000000000000000000000001234567890'

    const multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, multisigKeys)
    const giverKeys: KeyPair = TonKeysFileReader.read(config.net.test.giverKeys)
    const giverContract: GiverV2 = new GiverV2(kit, giverKeys)
    const rootKeys: KeyPair = await Ton.keys.random(kit.client)
    const artRoot: ArtRoot = new ArtRoot(kit, rootKeys)
    const artToken: ArtToken = new ArtToken(kit, await artRoot.calculateAddress(), 0, rootKeys)

    await giverContract.sendTransaction(await multisig.calculateAddress(), 10_000_000_000)
    await multisig.deploy([Ton.string.x0(multisigKeys.public)], 1)

    await giverContract.sendTransaction(await artRoot.calculateAddress(), 10_000_000_000)
    await artRoot.deploy(
        '0:0000000000000000000000000000000000000000000000000000000000000001',
        1_000_000_000,
        100_000_000,
        Ton.string.stringToHex('Art'),
        Ton.string.stringToHex('ART')
    )

    await multisig.callAnotherContract(
        await artRoot.calculateAddress(),
        1_000_000_000,
        true,
        0,
        artRootData.abi,
        'create',
        {
            owner: Ton.string.x0(multisigKeys.public),
            manager: '0:0000000000000000000000000000000000000000000000000000000000000001',
            managerUnlockTime: 0,
            creator: Ton.string.x0(multisigKeys.public),
            creatorFees: 0,
            hash: '0x0000000000000000000000000000000000000000000000000000000000000000'
        },
        multisigKeys
    )
    await artToken.addHash(newHash, multisigKeys)
    expect((await artToken.getArtInfo()).hash).toBe(newHash)

    done()
}, 30000)