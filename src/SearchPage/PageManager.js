import React, { Component } from 'react'

export default class PageManager extends Component {
    render() {
        const {
            handleNextPage,
            handlePreviousPage,
            currentPage,
            totalPages
        } = this.props;

        return (
            <div>
                {
                Number(currentPage) !== 1 && <button onClick={handlePreviousPage}>Previous Page</button> 
                }
                {
                Number(currentPage) !== Number(totalPages) && <button onClick={handleNextPage}>Next Page</button>
                }
                <h2 className="displayPage">Page {currentPage} of {totalPages}</h2>
            </div>
        )
    }
}
