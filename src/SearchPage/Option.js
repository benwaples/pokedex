import React, { Component } from 'react'

export default class Option extends Component {
    render() {
        return (
            <>
                <option value="pokemon">name</option>
                <option value="type">type</option>
                <option value="pokebase">pokebase</option>
                <option value="ability_1">ability</option>
            </>
        )
    }
}
