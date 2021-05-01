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
             * Giver keys.
             * @see https://github.com/tonlabs/tonos-se/tree/master/contracts
             * Examples:
             *     __dirname + 'common/keys/GiverV2.keys.json'
             *     '/home/user/keys/GiverV2.keys.json'
             */
            giverKeys: __dirname + '/../common/keys/GiverV2.keys.json',

            /**
             * How long to wait and result of call or deployment from local node in milliseconds
             * Examples:
             *     3000
             *     5000
             */
            timeout: 3000
        }
    }
}