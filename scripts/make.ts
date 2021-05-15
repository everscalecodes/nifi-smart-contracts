import Make from '../library/scripts/make/Make'

const make: Make = new Make({
    compile: [
        'contracts/tokens/random/RandomRoot',
        'contracts/tokens/random/RandomToken',

        'contracts/tokens/art/ArtRoot',
        'contracts/tokens/art/ArtToken',

        'contracts/tokens/ticket/TicketToken',
        'contracts/tokens/ticket/TicketRoot',

        'contracts/trade/TradeRoot',
        'contracts/trade/DirectAuctionPublicKey'
    ],
    wrap: [
        'library/ton/contracts/SafeMultisigWallet/SafeMultisigWallet',
        'library/ton/contracts/GiverV2/GiverV2'
    ],
    compiler: '0.43.0',
    linker: '0.3.0'
})
make.run().then()