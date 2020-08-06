import React, { Component } from 'react'
import request from 'superagent';
import Header from '../Header.js'
import Search from './Search.js'
import Option from './Option.js'
import PokemonList from './PokemonList.js'
import styles from '../App.css'
import '../App.css';


export default class SearchPage extends Component {
  state ={
    filteredPokemon: [],
    searchFilter: 'pokemon',
    isLoading: false,
  }

  handleSubmit = async () => {
    this.setState({isLoading: true})
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=800&${this.state.searchFilter}=${this.state.searchKeyword}`)

    this.setState({
      filteredPokemon: data.body.results,
      isLoading: false
    })

    console.log(this.state.filteredPokemon)
    console.log(this.state.searchFilter)

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
            <select onChange={(e) => {this.setState({searchFilter: e.target.value})}}>
                <Option />
            </select> 
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