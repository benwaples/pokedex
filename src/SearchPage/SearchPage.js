import React, { Component } from 'react'
import request from 'superagent';
import Search from './Search.js'
import Option from './Option.js'
import PageManager from './PageManager.js'
import PokemonList from './PokemonList.js'
import '../App.css'; 


export default class SearchPage extends Component {
  state ={
    filteredPokemon: [],
    searchFilter: 'pokemon',
    isLoading: false,
    currentPage: 1,
    totalPages: 1,
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.currentPage !== this.state.currentPage) {
      this.handleSubmit()
    }
  }

  componentDidMount = async () => {
    const urlParams = new URLSearchParams(this.props.location.search)

    
    const searchFilter = urlParams.get('searchFilter')
    const currentPage = urlParams.get('page')
    const search = urlParams.get('searchKeyword')
    console.log(searchFilter, 'search filter')

    if (searchFilter && currentPage && search) {
      await this.setState({
        searchFilter: searchFilter,
        currentPage: currentPage,
        searchKeyword: search
      })
    }

    await this.handleSubmit()
  }

  handleSubmit = async () => {
    this.setState({isLoading: true})
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchFilter}=${this.state.searchKeyword}`)

    this.setState({
      filteredPokemon: data.body.results,
      isLoading: false,
      totalPages: (Math.ceil(data.body.count / 20))
    })

    const URLParams = new URLSearchParams(this.props.location.search);

    URLParams.set('searchKeyword',this.state.searchKeyword)
    URLParams.set('searchFilter',this.state.searchFilter)
    URLParams.set('page',this.state.currentPage)

    this.props.history.push(`?` + URLParams.toString())
  }

  handleSearch = (e) => {
    this.setState({searchKeyword: e.target.value})
  }

  handleNextPage = () => {
    this.setState({ currentPage: Number(this.state.currentPage) +1 })
    console.log(this.state.currentPage, 'add page');
  }
  
  handlePreviousPage = () => {
    this.setState({ currentPage: Number(this.state.currentPage) -1 })
    console.log(this.state.currentPage, 'minus page');
  }
  
  render() {
    return (
      <main>
        <div id="row">
          <div id="left">
            <Search searchKeyword={this.state.searchKeyword} handleSearch={this.handleSearch} />
            <select value={this.state.searchFilter} onChange={(e) => {this.setState({searchFilter: e.target.value})}}>
                <Option />
            </select> 
            <button onClick={this.handleSubmit}>Find Pokemon</button>
            <PageManager 
            handleNextPage={this.handleNextPage} 
            handlePreviousPage={this.handlePreviousPage} 
            currentPage={this.state.currentPage}
            totalPages={this.state.totalPages} />
          </div>
            {this.state.isLoading ? <img className={"spin"} src="pokeball.png" alt="pokeball"/> :
            <PokemonList displayPoke={this.state.filteredPokemon}/>
            }
        </div>
      </main>
    )
  }
}