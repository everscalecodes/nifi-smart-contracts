import path from 'path'
import config from '../../configs/config'
import {exec, ExecException} from 'child_process'
import {red, green} from 'colors'
import TaskInterface from './interfaces/TaskInterface'
import MakeConfigInterface from './interfaces/MakeConfigInterface'

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
            const directory: string = path.dirname(relativePath)
            const fileName: string = path.basename(relativePath)
            const commands: string = Make._generateCommands(directory, fileName, type)
            this._tasks.push({
                commands: commands,
                path: relativePath
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
        return (type === TaskType.COMPILE)
            ?
`cd ${directory}
${config.make.compiler} ${fileName}.sol
${config.make.tonVirtualMachineLinker} compile ${fileName}.code -o ${fileName}.tvc --lib ${config.make.compilerLibrary}
${config.make.tonVirtualMachineLinker} decode --tvc ${fileName}.tvc > ${fileName}.decode`
            :
`cd ${directory}
${config.make.tonVirtualMachineLinker} decode --tvc ${fileName}.tvc > ${fileName}.decode`
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
            console.log(`${green('✓')} ${this._currentTask.path}`)
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