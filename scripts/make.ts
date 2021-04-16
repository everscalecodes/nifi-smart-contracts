import Make from './classes/Make'

const make:Make = new Make({
    compile: [
        'contracts/tokens/random/RandomRoot',
        'contracts/tokens/random/RandomToken',
        'contracts/tokens/art/ArtRoot',
        'contracts/tokens/art/ArtToken',
        'contracts/tokens/ticket/TicketToken'
    ],
    decode: [
        'common/contracts/SafeMultisigWallet'
    ]
})
make.run()