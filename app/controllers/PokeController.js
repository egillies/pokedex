import { AppState } from "../AppState.js";
import { pokeService } from "../services/PokeService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";




function _drawPokemon() {
    let template = ''

    AppState.pokemon.forEach(pokemon => {
        // add an onclick to the <li> tag that goes and gets pokemon details
        template += `
        <li>${pokemon.name}</li>
        `
    })
    setHTML('pokemon-list-container', template)
}




export class PokeController {

    constructor() {
        console.log('pokecontroller has loaded')
        this.getPokemon()
        AppState.on('pokemon', _drawPokemon)
    }


    async getPokemon() {
        try {
            await pokeService.getPokemon()
        } catch (error) {
            console.error(error);
            Pop.error(error.message);
        }
    }
}