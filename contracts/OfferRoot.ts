import OfferRootContracts from './trade/OfferRoot'
import OfferContract from './trade/Offer'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'
import Contract from '../library/ton/base/Contract'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'

export default class OfferRoot extends Contract {
    public constructor(kit: KitInterface, keys: KeyPair) {
        super(kit, {
            abi: OfferRootContracts.abi,
            tvc: OfferRootContracts.tvc,
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
        creationAndStorageFee:number,
        name: string,
        symbol: string
    ): Promise<boolean> {
        return await this._deploy({
            manager: manager,
            creationMinValue: creationMinValue,
            creationFee: creationFee,
            creationAndStorageFee: creationAndStorageFee,
            name: name,
            symbol: symbol,
            tokenCode: OfferContract.code
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