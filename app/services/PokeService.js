import { AppState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"


class PokeService {
    async getPokemon() {
        const res = await pokeApi.get(``)
        console.log('got pokemon', res.data)

        AppState.pokemon = res.data.results

        
    }
}

export const pokeService = new PokeService()