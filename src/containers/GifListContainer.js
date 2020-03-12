import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifs:[],
        searchTerm:"dolphin"
    }
    // componentDidMount(){
    // }
    
    changeSearch = (e) => {
        e.preventDefault() 
        this.setState({
            searchTerm:e.target.value
        })
    }

    submitSearch = e =>{
        e.preventDefault();
        console.log(e.target.search.value)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json()) 
        .then(json => this.setState({
            gifs:json['data']
        }))
    }


    render(){ 
        return(
            <div>
                <GifSearch 
                    submitSearch={this.submitSearch}
                    changeSearch={this.changeSearch}
                />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

}