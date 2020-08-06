import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div id="search">
                <h1>Which Pokemon Would you like to search?</h1>
                <input type="text" onChange={this.props.handleSearch} />
            </div>
        )
    }
}
