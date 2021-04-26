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
        'common/contracts/SafeMultisigWallet/SafeMultisigWallet',
        'common/contracts/GiverV2/GiverV2'
    ]
})
make.run()
//
// import Ton from "../../common/classes/utils/Ton";
//
// console.log(Ton.stringToHex('T'))