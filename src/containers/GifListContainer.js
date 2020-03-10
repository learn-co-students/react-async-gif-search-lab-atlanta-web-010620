import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: [],
        search: ''
    }

    render() {
        return (
            <div>
                <GifSearch search={this.state.search} handleSubmit={this.handleSubmit} handleSearchChange={this.handleSearchChange}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target.search.value}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => {
            this.setState({gifs: json.data.slice(0,3)})
        })
    }

    handleSearchChange = event => {
        this.setState({
            search: event.target.value
        })
    }

}

export default GifListContainer