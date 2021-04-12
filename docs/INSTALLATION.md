# Installation
## Requirements
* [Node.js](https://nodejs.org) >= `15.x`
* [Yarn](https://classic.yarnpkg.com) >= `1.22.x`
* [TON Solidity Compiler](https://github.com/tonlabs/TON-Solidity-Compiler) = `0.40`
* [TVM linker](https://github.com/tonlabs/TVM-linker) >= `0.3.x`
* [TON Labs Dev command line tool](https://github.com/tonlabs/ton-dev-cli) >= `0.17.x`

## Run a local node for tests
```sh
tondev add nifi
tondev set --port 8080 nifi
```

## Set up
```sh
yarn install
```

Copy config.example.ts to config.ts
```sh
yarn cp
```

Edit config/config.ts
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
    }
}
```