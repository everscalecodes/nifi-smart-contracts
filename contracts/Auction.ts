import AuctionContract from './trade/DirectAuction'
import {DecodedMessageBody, KeyPair} from '@tonclient/core/dist/modules'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import Contract from '../library/ton/base/Contract'

export default class ArtToken extends Contract {
    public constructor(kit: KitInterface, root: string, id: number, keys: KeyPair) {
        super(kit, {
            abi: AuctionContract.abi,
            tvc: AuctionContract.tvc,
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
    public async getInfo(): Promise<AuctionInfo> {
        const result: DecodedMessageBody = await this._run('getInfo')
        return result.value
    }
}

export interface CurBidInfo {
    bider: string
    value: string
}

export interface AuctionInfo {
    starTime: string
    endTime: string
    startBid: string
    stepBid: string
    curBid: CurBidInfo
    feeBid: string
    token: string
    creator: string
    root: string
    id: string
}