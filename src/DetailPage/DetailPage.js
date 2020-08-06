import React, { Component } from 'react'
import request from 'superagent'

export default class DetailPage extends Component {

    state = {
        detailedPokemon: null
    }

    componentDidMount = async () => {
        const name = this.props.match.params.myPokemonName

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=800&pokemon=${name}`)

        const thisPoke = data.body.results[0]
        console.log(thisPoke, 'pokemon data');

        this.setState({detailedPokemon: thisPoke})
    }

    render() {
        console.log(this.state.detailedPokemon);
        // const { 
        //     detailedPokemon: {
        //         pokemon,
        //         url_image,
        //         // height,
        //         // weight,
        //         // ability_hidden,
        //         // defense,
        //         // type_1

        //     }
        // } = this.state;

        return (
            <div>
                {/* <p>{pokemon}</p>
                <img src={url_image} alt={pokemon} /> */}
            </div>
        )
    }
}
