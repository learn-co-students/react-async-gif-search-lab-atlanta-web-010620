import React from 'react'

class GifList extends React.Component {

    gifElements() {
        return this.props.gifs.map(gif => {
            return <li><img src={gif.images.original.url} alt=''/></li>
        })
    }

    render() {
        return (
            <ul>
                {this.gifElements()}
            </ul>
        )
    }

}

export default GifList