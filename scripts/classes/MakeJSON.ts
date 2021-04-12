import fs from 'fs'
import DataJSONInterface from './interfaces/DataJSONInterface'

export default class MakeJSON {
    /**
     * Read data from files that generated after compilation and save in JSON format.
     * @param absolutePath {string} Example:
     *     '/home/user/project/contracts/tokens/random/RandomToken'
     * @private
     */
    public static generate(absolutePath: string): void {
        const data: DataJSONInterface = {
            abi: MakeJSON._readAbi(absolutePath),
            tvc: MakeJSON._readTVC(absolutePath),
            code: MakeJSON._readCode(absolutePath)
        }
        const text: string = JSON.stringify(data)
        fs.writeFileSync(`${absolutePath}.json`, text)
    }

    /**
     * Read data in base64 format from *.tvc file.
     * @param absolutePath {string} Example:
     *     '/home/user/project/contracts/tokens/random/RandomToken'
     * @private
     */
    private static _readTVC(absolutePath: string): string {
        return fs.readFileSync(`${absolutePath}.tvc`, 'base64')
    }

    /**
     * Read contract code in utf8 format from *.decode file.
     * @param absolutePath {string} Example:
     *     '/home/user/project/contracts/tokens/random/RandomToken'
     * @private
     */
    private static _readCode(absolutePath: string): string {
        const decodedText: string = fs.readFileSync(`${absolutePath}.decode`, 'utf8')
        return decodedText.match(/(?<=code: ).+/)[0]
    }

    /**
     * Read ABI object from *.abi.json file.
     * @param absolutePath {string} Example:
     *     '/home/user/project/contracts/tokens/random/RandomToken'
     * @private
     */
    private static _readAbi(absolutePath: string): Object {
        return JSON.parse(fs.readFileSync(`${absolutePath}.abi.json`, 'utf-8'))
    }
}