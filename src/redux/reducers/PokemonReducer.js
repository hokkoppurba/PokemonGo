import {LIST_POKEMON, ID, DETAIL_POKEMON} from '../actions/PokemonAction'

const initialState = {
    listPokemon: [],    
    id: 0,
    detailPokemon: []
}

const filmReducer = (state = initialState, action) => {
    switch(action.type){
        case LIST_POKEMON:
            return {
                ...state,
                listPokemon: action.payload
            }
        case ID:
            return {
                ...state,
                id: action.payload
            }
        case DETAIL_POKEMON:
            return {
                ...state,
                detailPokemon: action.payload
            }
        default:
            return state
    }
}

export default filmReducer;