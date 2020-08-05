import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div id="search">
                <input type="text" onChange={this.props.handleSearch} />
            </div>
        )
    }
}
