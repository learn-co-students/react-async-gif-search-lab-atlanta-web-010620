import React, { Component } from 'react'

export default class GifList extends Component {
    renderGifs(list){
        return list.map((gif) => {
            return <img src={gif["images"]["downsized_large"]["url"]} />
        })
    }
    render(){
        return (
            <div>
            {console.log(this.props)}
            {this.renderGifs(this.props.gifs)}

            </div>
        )
    }
}