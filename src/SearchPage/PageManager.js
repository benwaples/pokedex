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
            <>
                <div className="pageNavBox">
                    {
                    Number(currentPage) === 1 ? <button onClick={handlePreviousPage} className="pageNav disable">Previous Page</button> : <button onClick={handlePreviousPage} className="pageNav">Previous Page</button> 
                    }
                    {
                    Number(currentPage) !== Number(totalPages) ? <button onClick={handleNextPage} className="pageNav">Next Page</button> :
                    <button onClick={handleNextPage} className="pageNav disable">Next Page</button>
                    }
                </div>
                    <h2 className="displayPage">Page {currentPage} of {totalPages}</h2>
            </>
        )
    }
}
