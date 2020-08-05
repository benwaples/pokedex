import React, { Component } from 'react'
import Header from './Header.js'
import Search from './Search.js'
import PokemonList from './PokemonList.js'
import './App.css';


export default class App extends Component {
  
  
  render() {
    return (
      <main>
        <Header />
        <Search />
        <PokemonList />
      </main>
    )
  }
}
