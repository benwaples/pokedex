import React, { Component } from 'react'
import request from 'superagent';
import Header from './Header.js'
import Search from './Search.js'
import PokemonList from './PokemonList.js'
import styles from './App.css'
import './App.css';


export default class App extends Component {
  state ={
    filteredPokemon: [],
    searchKeyword: '',
    isLoading: false,
  }

  handleSubmit = async () => {
    this.setState({isLoading: true})
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=400&pokemon=${this.state.searchKeyword}`)

    this.setState({
      filteredPokemon: data.body.results,
      isLoading: false
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
        <div id="row">
          <div id="left">
            <Search handleSearch={this.handleSearch} />
            <button onClick={this.handleSubmit}>Find Pokemon</button>
          </div>
            {this.state.isLoading ? <img className={styles.spin} src="pokeball.png" alt="pokeball"/> :
            <PokemonList displayPoke={this.state.filteredPokemon}/>
            }
        </div>
      </main>
    )
  }
}
