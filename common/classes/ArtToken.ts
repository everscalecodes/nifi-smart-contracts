import Contract from './base/Contract'
import ArtTokenContract from '../../contracts/tokens/art/ArtToken'
import {DecodedMessageBody, KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import KitInterface from './utils/interface/KitInterface'

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



    /**********
     * PUBLIC *
     **********/
    public addHash(hash: string, keys: KeyPair): Promise<ResultOfProcessMessage> {
        return this._call('addHash', {
            hash: hash
        }, keys)
    }



    /***********
     * GETTERS *
     ***********/
    public async getArtInfo(): Promise<ArtInfo> {
        const result: DecodedMessageBody = await this._run('getArtInfo')
        return result.value
    }
}

export interface ArtInfo {
    creator: string
    creatorFees: string
    hash: string
    hashesCount: string
}