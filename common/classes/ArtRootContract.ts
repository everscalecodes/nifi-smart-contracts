import Contract from './base/Contract'
import artRootData from '../../contracts/tokens/art/ArtRoot.json'
import artTokenData from '../../contracts/tokens/art/ArtToken.json'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'

export default class ArtRootContract extends Contract {
    public constructor(keys: KeyPair) {
        super({
            abi: artRootData.abi,
            tvc: artRootData.tvc,
            initialData: {},
            keys: keys
        })
    }



    /**********
     * DEPLOY *
     **********/
    public async deploy(
        manager: string,
        creationMinValue: number,
        creationFee: number,
        name: string,
        symbol: string
    ): Promise<boolean> {
        return await this._deploy({
            manager: manager,
            creationMinValue: creationMinValue,
            creationFee: creationFee,
            name: name,
            symbol: symbol,
            tokenCode: artTokenData.code
        })
    }



    /***********
     * GETTERS *
     ***********/
    public async getManager(): Promise<string> {
        const result: DecodedMessageBody = await this._run('getManager')
        return result.value['manager']
    }

    public async getCreationFee(): Promise<CreationFee> {
        const result: DecodedMessageBody = await this._run('getCreationFee')
        return result.value
    }
}

export interface CreationFee {
    minValue: string
    uint128: string
}