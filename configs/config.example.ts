export default {
    make: {
        /**
         * Path to solidity compiler
         * Examples:
         *     '~/Projects/tonlabs/TON-Solidity-Compiler/build/solc/solc'
         *     '/home/user/bin/solc'
         */
        compiler: '~/Projects/tonlabs/TON-Solidity-Compiler/build/solc/solc',

        /**
         * Path to solidity compiler library
         * Examples:
         *     '~/Projects/tonlabs/TON-Solidity-Compiler/lib/stdlib_sol.tvm'
         *     '/home/user/lib/stdlib_sol.tvm'
         */
        compilerLibrary: '~/Projects/tonlabs/TON-Solidity-Compiler/lib/stdlib_sol.tvm',

        /**
         * Path to TVM linker
         * Examples:
         *     '~/Projects/tonlabs/TVM-linker/tvm_linker/target/release/tvm_linker'
         *     '/home/user/bin/tvm_linker'
         */
        tonVirtualMachineLinker: '~/Projects/tonlabs/TVM-linker/tvm_linker/target/release/tvm_linker'
    }
}