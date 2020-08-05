import React, { Component } from 'react'
import request from 'superagent';
import Header from './Header.js'
import Search from './Search.js'
import PokemonList from './PokemonList.js'
import './App.css';


export default class App extends Component {
  state ={
    filteredPokemon: [],
    searchKeyword: '',
  }

  handleSubmit = async () => {
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=400&pokemon=${this.state.searchKeyword}`)

    this.setState({
      filteredPokemon: data.body.results
    })

    console.log(this.state.filteredPokemon)
  }

  handleSearch = (e) => {
    this.setState({searchKeyword: e.target.value})
  }
  
  render() {
    return (
      <main>
        <Header />
        <Search handleSearch={this.handleSearch} />
        <button onClick={this.handleSubmit}>Find Pokemon</button>
        <PokemonList />
      </main>
    )
  }
}
