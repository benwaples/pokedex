import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PokemonList extends Component {
    render() {
        return (
                <ul id="pokemon-list">
                    {this.props.displayPoke.map(poke => (
                    <li key={poke.id}>
                        <h1>{poke.pokemon}</h1>
                        <img className="pokeImg" src={poke.url_image} alt={`this is ${poke.pokemon}`} />
                        <p id="height">Height: {poke.height}ft</p>
                        <p id="weight">Weight: {poke.weight}Ibs</p>
                        <Link to={`/detailPage/${poke.pokemon}`}><p>More Details</p></Link>
                    </li>))}
                </ul>
        )
    }
}
