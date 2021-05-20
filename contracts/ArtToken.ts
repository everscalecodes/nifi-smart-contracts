import ArtTokenContract from './tokens/art/ArtToken'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import Contract from '../library/ton/base/Contract'

export default class ArtToken extends Contract {
    public constructor(kit: KitInterface, root: string, id: number, keys: KeyPair) {
        super(kit, {
            abi: ArtTokenContract.abi,
            tvc: ArtTokenContract.tvc,
            initialData: {
                _root: root,
                _id: id
            },
            keys: keys
        })
    }

    /***********
     * GETTERS *
     ***********/
    public async getArtInfo(): Promise<ArtInfo> {
        const result: DecodedMessageBody = await this._run('getArtInfo')
        return result.value
    }

    public async getInfo(): Promise<Info> {
        const result: DecodedMessageBody = await this._run('getInfo')
        return result.value
    }

}

export interface Info {
    root: string
    id: string
    publicKey: string
    owner: string
    manager: string
    managerUnlockTime: string
}

export interface ArtInfo {
    creator: string
    creatorFees: string
    hash: string
    hashesCount: string
}

