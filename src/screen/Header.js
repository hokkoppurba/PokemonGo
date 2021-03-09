import React, {Component} from 'react'
import {Route, NavLink, HashRouter} from 'react-router-dom'
import '../styles/styleHeaders.css';
import ListPokemon from './ListPokemon';
import DetailPokemon from './DetailPokemon';

class Header extends Component{
    render(){
        return(
            <HashRouter>            
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul class="navbar-nav">
                        <li className="nav-item-active">
                            <NavLink className="nav-link" exact to='/'>List Pokemon</NavLink>
                        </li>
                        <li className="nav-item-active">
                            <NavLink className="nav-link" to='/ListPokemon'>My List Pokemon</NavLink>
                        </li>                        
                    </ul>                    
                </nav>
                <div className="content">
                    <Route exact path="/" component={ListPokemon}/>   
                    <Route exact path="/detail" component={DetailPokemon}/>
                </div>
            </HashRouter>
        )
    }
}

export default Header;