import Make from './classes/Make'

const make:Make = new Make({
    compile: [
        'contracts/tokens/random/RandomRoot',
        'contracts/tokens/random/RandomToken',
        'contracts/tokens/art/ArtRoot',
        'contracts/tokens/art/ArtToken',
        'contracts/tokens/ticket/TicketToken',
        'contracts/tokens/ticket/TicketRoot'
    ],
    decode: [
        'common/contracts/SafeMultisigWallet'
    ]
})
make.run()