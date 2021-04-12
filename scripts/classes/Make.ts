import path from 'path'
import {exec, ExecException} from 'child_process'
import {red, green} from 'colors'
import root from '../../root'
import config from '../../configs/config'
import TaskInterface from './interfaces/TaskInterface'
import MakeConfigInterface from './interfaces/MakeConfigInterface'
import MakeJSON from './MakeJSON'

enum TaskType {
    COMPILE = 'compile',
    DECODE = 'decode'
}

export default class Make {
    private readonly _tasks: TaskInterface[]
    private _taskIndex: number

    /**
     * @param config {MakeConfigInterface} Config contains relative paths without '.sol' and '.tvc' extension. Example:
     *     {
     *         compile: [
     *             'contracts/tokens/random/RandomToken',
     *             'contracts/tokens/random/RandomRoot
     *         ],
     *         decode: [
     *             'tests/contracts/SafeMultisigWallet'
     *         ]
     *     }
     */
    public constructor(config: MakeConfigInterface) {
        this._tasks = []
        this._taskIndex = 0
        this._read(config.compile, TaskType.COMPILE)
        this._read(config.decode, TaskType.DECODE)
    }

    /**
     * Read paths and create tasks.
     * @param relativePaths {string[]} Array of relative path of *.sol and *.tvc files to compile.
     * Paths without '.sol' and '*.tvc' extension. Example:
     *     ['contracts/tokens/random/RandomToken', 'contracts/tokens/random/RandomRoot']
     * @param type {TaskType} Variables:
     *     'compile'
     *     'decode'
     * @private
     */
    private _read(relativePaths: string[] = [], type: TaskType): void {
        for (let i: number = 0; i < relativePaths.length; i++) {
            const relativePath: string = relativePaths[i]
            const absolutePath: string = path.resolve(root, relativePath)
            const directory: string = path.resolve(root, path.dirname(relativePath))
            const fileName: string = path.basename(relativePath)
            const commands: string = Make._generateCommands(directory, fileName, type)
            this._tasks.push({
                commands: commands,
                relativePath: relativePath,
                absolutePath: absolutePath
            })
        }
    }

    /**
     * @param directory {string} Example:
     *     'contracts/tokens/random'
     * @param fileName {string} Example:
     *     'RandomToken'
     * @param type {TaskType} Example:
     *     'compile'
     * @return {string} Example:
     *     `cd contracts/tokens/random
     *     solc RandomToken.sol
     *     tvm_linker compile RandomToken.code -o RandomToken.tvc --lib lib/stdlib_sol.tvm
     *     tvm_linker decode --tvc RandomToken.tvc > RandomToken.decode`
     */
    private static _generateCommands(directory: string, fileName: string, type: TaskType): string {
        const compiler: string = config.make.compiler
        const tvmLinker: string = config.make.tonVirtualMachineLinker
        const compilerLibrary: string = config.make.compilerLibrary
        return (type === TaskType.COMPILE)
            ?
                `cd ${directory}
                ${compiler} ${fileName}.sol
                ${tvmLinker} compile ${fileName}.code -o ${fileName}.tvc --lib ${compilerLibrary}
                ${tvmLinker} decode --tvc ${fileName}.tvc > ${fileName}.decode`
            :
                `cd ${directory}
                ${tvmLinker} decode --tvc ${fileName}.tvc > ${fileName}.decode`
    }

    /**
     * Execute current task.
     */
    public run(): void {
        exec(this._currentTask.commands, this._onExecComplete.bind(this))
    }

    /**
     * Returns current task.
     * @private
     */
    private get _currentTask(): TaskInterface {
        return this._tasks[this._taskIndex]
    }

    /**
     * Exec callback.
     * @param error {ExecException | null} ExecException if commands executed not correctly.
     * @param standardOutput {string} stdout
     * @param standardError {string} stderr
     */
    private _onExecComplete(error: ExecException | null, standardOutput: string, standardError: string): void {
        if (error)
            console.error(error)
        else if (standardError.length)
            console.error(red(standardError))
        else {
            MakeJSON.generate(this._currentTask.absolutePath)
            console.log(`${green('✓')} ${this._currentTask.relativePath}`)
            this._tryRunNextTask()
        }
    }

    /**
     * Call run() again for next task if tasks is not over.
     * @private
     */
    private _tryRunNextTask(): void {
        if (this._taskIndex >= (this._tasks.length - 1))
            return
        this._taskIndex++
        this.run()
    }
}