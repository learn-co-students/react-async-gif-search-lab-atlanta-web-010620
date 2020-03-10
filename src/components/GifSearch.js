import React from 'react';

class GifSearch extends React.Component {

    render() {
        return (
            <form onSubmit={event => this.props.handleSubmit(event)}>
                <label>Enter a Search Term:</label>
                <input type="text" name="search" onChange={event => this.props.handleSearchChange(event)} value={this.props.search} />
                <button type="submit">Search Gifs</button>
            </form>
        )
    }
}

export default GifSearch;