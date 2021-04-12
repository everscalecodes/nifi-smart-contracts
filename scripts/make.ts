import Make from './classes/Make'

const make:Make = new Make({
    compile: [
        'contracts/tokens/random/RandomRoot',
        'contracts/tokens/random/RandomToken',
        'contracts/tokens/art/ArtRoot',
        'contracts/tokens/art/ArtToken'
    ],
    decode: [
        'tests/contracts/SafeMultisigWallet'
    ]
})
make.run()