import React, { Component } from 'react' 

export default class GifSearch extends Component {

    render(){
        return(
            <form
                onSubmit={this.props.submitSearch}
            >

            <input
                placeholder="bla"
                name="search"
                onChange={this.props.changeSearch}
                ></input>
                <button>search em lol</button>
            </form>
            )
    }

}