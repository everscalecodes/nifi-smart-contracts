import Make from './classes/Make'
import MakeConfigInterface from './classes/interfaces/MakeConfigInterface'

const config: MakeConfigInterface = {
    compile: [
        'contracts/tokens/random/RandomRoot',
        'contracts/tokens/random/RandomToken',
        'contracts/tokens/art/ArtRoot',
        'contracts/tokens/art/ArtToken'
    ]
}
const make:Make = new Make(config)
make.run()