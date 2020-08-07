import React, { Component } from 'react'

export default class Pokemon extends Component {
    render() {
        const { pokedata } = this.props;
        return (
            <div className="container">
                <div className="detailedView">
                    <h1>{pokedata.pokemon}</h1>
                    <img src={pokedata.url_image} alt={pokedata.pokemon} />
                    <p>Defense: {pokedata.defense}</p>
                    <p>Egg Group: {pokedata.egg_group_1}</p>
                    <p>Pokebase: {pokedata.pokebase}</p>
                    <p>Speed: {pokedata.speed}</p>
                </div>
            </div>
        )
    }
}
