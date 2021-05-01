import {KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import Contract from './base/Contract'
import GiverV2Contract from '../contracts/GiverV2/GiverV2'
import TonKeys from './utils/TonKeys'

export default class GiverV2 extends Contract {
    public constructor(keyFile: string) {
        const keys: KeyPair = TonKeys.readKeys(keyFile)
        super({
            abi: GiverV2Contract.abi,
            initialData: {},
            keys: keys,
            tvc: GiverV2Contract.tvc
        })
    }



    /**********
     * PUBLIC *
     **********/
    public sendTransaction(dest: string, value: number, bounce: boolean = false): Promise<ResultOfProcessMessage> {
        return this._call('sendTransaction', {
            dest: dest,
            value: value,
            bounce: bounce
        })
    }
}