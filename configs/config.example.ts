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
    },
    net: {
        test: {
            /**
             * Local network URL
             * Examples:
             *     'http://localhost:8080'
             *     'http://0.0.0.0:80'
             */
            url: 'http://localhost:8080',

            /**
             * Giver address.
             * @see https://github.com/tonlabs/tonos-se/tree/master/contracts
             * Examples:
             *     '0:841288ed3b55d9cdafa806807f02a0ae0c169aa5edfe88a789a6482429756a94',
             *     '0:7777777777777777777777777777777777777777777777777777777777777777'
             */
            giver: '0:841288ed3b55d9cdafa806807f02a0ae0c169aa5edfe88a789a6482429756a94',

            /**
             * How long to wait and result of call or deployment from local node in milliseconds
             * Examples:
             *    3000
             *    5000
             */
            timeout: 3000
        }
    }
}