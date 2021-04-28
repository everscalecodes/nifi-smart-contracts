# Installation
## Requirements
* [Node.js](https://nodejs.org) >= `15.x`
* [Yarn](https://classic.yarnpkg.com) >= `1.22.x`
* [TON Solidity Compiler](https://github.com/tonlabs/TON-Solidity-Compiler) = `0.42`
* [TVM linker](https://github.com/tonlabs/TVM-linker) >= `0.3.x`
* [Free TON Development Environment](https://github.com/tonlabs/tondev) >= `0.4.x`

## Set up local node
```sh
tondev se set --port 8080
tondev se start
```

## Set up project
```sh
yarn install
```

Copy config.example.ts to config.template.ts
```sh
yarn cp
```

Edit config/config.template.ts
```ts
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
             * @see https://github.com/tonlabs/tonos-se/tree/feature/dev-giver/contracts
             * Examples:
             *     '0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5'
             *     '0:7777777777777777777777777777777777777777777777777777777777777777'
             */
            giver: '0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5',

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
```