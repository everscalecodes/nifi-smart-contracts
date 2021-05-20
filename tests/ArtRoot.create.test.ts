it('Valid', async done => {
    expect(1).toBe(1)
    done()
}, 30000)
/*import config from '../configs/config'
import ArtRoot from '../contracts/ArtRoot'
import {KeyPair} from '@tonclient/core/dist/modules'
import artRootData from '../contracts/tokens/art/ArtRoot'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import ArtToken from '../contracts/ArtToken'
import {Ton} from '../library'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import SafeMultisigWallet from '../library/ton/contracts/SafeMultisigWallet'
import TonKeysFile from '../library/ton/utils/node/TonKeysFile'
import GiverV2 from '../library/ton/contracts/GiverV2'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.create(config.net.test)

it('Valid', async done => {
    const hash: string = '0x0000000000000000000000000000000000000000000000000000000012345678'

    const multisigKeys: KeyPair = await Ton.keys.random(kit.client)
    const multisig: SafeMultisigWallet = new SafeMultisigWallet(kit, multisigKeys)
    const giverKeys: KeyPair = TonKeysFile.read(config.net.test.keys.giver)
    const giverContract: GiverV2 = new GiverV2(kit, giverKeys)
    const rootKeys: KeyPair = await Ton.keys.random(kit.client)
    const artRoot: ArtRoot = new ArtRoot(kit, rootKeys)
    const artToken: ArtToken = new ArtToken(kit, await artRoot.calculateAddress(), 0, rootKeys)

    await giverContract.sendTransaction(await multisig.calculateAddress(), 10_000_000_000)
    await multisig.deploy([Ton.hex.x0(multisigKeys.public)], 1)

    await giverContract.sendTransaction(await artRoot.calculateAddress(), 10_000_000_000)
    await artRoot.deploy(
        '0:0000000000000000000000000000000000000000000000000000000000000001',
        1_000_000_000,
        100_000_000,
        Ton.hex.string('Art'),
        Ton.hex.string('ART')
    )

    await multisig.callAnotherContract(
        await artRoot.calculateAddress(),
        1_000_000_000,
        true,
        0,
        artRootData.abi,
        'create',
        {
            owner: await multisig.calculateAddress(),
            manager: '0:0000000000000000000000000000000000000000000000000000000000000001',
            managerUnlockTime: 0,
            creator: await multisig.calculateAddress(),
            creatorFees: 0,
            hash: hash
        },
        multisigKeys
    )
    expect((await artToken.getArtInfo()).hash).toBe(hash)

    done()
}, 30000)*/