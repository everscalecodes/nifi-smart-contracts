export default {
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