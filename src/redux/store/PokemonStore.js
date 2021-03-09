import {createStore, combineReducers} from 'redux'
import pokemonReducer from '../reducers/PokemonReducer'

const rootReducer = combineReducers(
    {pokemon: pokemonReducer}
)

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore