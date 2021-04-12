import {ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import Contract from './base/Contract'
import config from '../../configs/config'
import giverABI from '../contracts/giver.abi.json'

export default class LocalNodeGiverContract extends Contract {
    public constructor() {
        super({
            abi: giverABI,
            address: config.net.test.giver
        })
    }



    /**********
     * PUBLIC *
     **********/
    public sendGrams(amount: number, dest: string): Promise<ResultOfProcessMessage> {
        return this._call('sendGrams', {
            amount: amount,
            dest: dest
        })
    }
}