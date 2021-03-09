import React, {Component} from 'react'
import Config from '../config'
import * as filmAction from '../redux/actions/PokemonAction'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

class People extends Component{
    componentDidMount(){
        this.getList()
    }

    getList() {
        const {actions, id} = this.props
        console.log(id)
        let urlFetch = Config.API_BASE_URL + `/pokemon/${id}/`
        fetch(urlFetch,
            {
                method: 'GET',
            }).then((response) => response.json()).then(async (responseJson) => {
                // console.log(responseJson)  
                actions.changeDetail(responseJson)              
            }).catch((error) => {
                console.log(error)
            });
    }

    render(){
        const {detail,id} = this.props                  
        return(
            <div class="container">
                <div className="row">
                    <div class="col-md-12">
                        <div class="card">
                        <div class="card-header font-weight-bold text-center">{detail.name}</div>                            
                          <div class="col-md-6">
                            <div class="card-body">
                              <div class="pull-left">
                              <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} class="img-circle" alt="Cinque Terre" width="200" height="200"/>
                              </div>
                              <p><b>Base Experience   :</b>{detail.base_experience}</p>
                              <p><b>Height    :</b>{detail.height}</p>
                              <p><b>Order    :</b>{detail.order}</p>
                              <p><b>Weight    :</b>{detail.weight}</p>                                                              
                            </div>
                          </div>
                        </div>
                    </div>                                                                  
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({        
    id: state.pokemon.id, 
    detail: state.pokemon.detailPokemon
})

const ActionCreators = Object.assign(
    {},
    filmAction
)

const mapDispatchProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchProps)(People)