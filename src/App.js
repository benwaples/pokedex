import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage.js';
import DetailPage from './DetailPage/DetailPage.js';
import Header from './Header.js';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                  <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route
                          path="/detailPage/:myPokemonName" 
                          exact
                          render={(routerProps) => <DetailPage {...routerProps} />} 
                         />
                    </Switch>
                </Router>
            </div>
        )
    }
  }