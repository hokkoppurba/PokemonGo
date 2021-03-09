import React, {Component} from 'react'
import Config from '../config'
import * as PokemonAction from '../redux/actions/PokemonAction'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Films extends Component{
    componentDidMount(){
        this.getList()
    }

    getList() {
        const {actions} = this.props        
        let urlFetch = Config.API_BASE_URL + `/pokemon/`
        fetch(urlFetch,
            {
                method: 'GET',
            }).then((response) => response.json()).then(async (responseJson) => {
                console.log(responseJson)
                actions.changePokemon(responseJson)
            }).catch((error) => {
                console.log(error)
            });
    }

    changePeople(id){
      const {actions} = this.props
      actions.changeId(id)      
    }

    render(){
        const {pokemon} = this.props        
        return(
            <div class="container">
              <div class="float-right">count: {pokemon.count}</div>
                <div className="row">
                {
                    pokemon.length !== 0 &&
                    pokemon.results.map((item) => {
                      var id = item.url.split('/')                      
                        return(                                                        
                            <div class="col-md-4">
                            <Link to={`/detail`} >
                                <div class="card" onClick={() =>{ this.changePeople(id[6])} }>
                                  <div class="card-header font-weight-bold">{item.name}</div>
                                </div>                                
                            </Link>                         
                            </div>                     
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pokemon: state.pokemon.listPokemon,
    id: state.pokemon.id
})

const ActionCreators = Object.assign(
    {},
    PokemonAction
)

const mapDispatchProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchProps)(Films)