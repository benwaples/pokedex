import React, { Component } from 'react'
import request from 'superagent'
import Pokemon from './Pokemon.js'
import '../App.css'; 

export default class DetailPage extends Component {

    state = {
        detailedPokemon: null,
        isLoading: false,
    }

    componentDidMount = async () => {
        this.state.isLoading = true;
        const name = this.props.match.params.myPokemonName

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=800&pokemon=${name}`)

        
        const thisPoke = data.body.results[0]
        this.setState({detailedPokemon: thisPoke})
        console.log(this.state.detailedPokemon, 'pokemon data');
        
        this.state.isLoading = false
    }

    render() {
        return (
            <>
            {
                this.state.isLoading 
                ?
                <>
                    <h1>More Info on {this.state.detailedPokemon.pokemon}</h1>
                    <Pokemon pokedata={this.state.detailedPokemon}/>
                </>
                : <img className="spin" id="centerIt" src="/pokeball.png" alt="pokeball"/>
            }
            </>
        )
    }
}
