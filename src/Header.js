import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/"><img id="headerimg" src="/googlepoke.jpg" alt="sickpick"/> </Link>
                <nav></nav>
            </header>
        )
    }
}
