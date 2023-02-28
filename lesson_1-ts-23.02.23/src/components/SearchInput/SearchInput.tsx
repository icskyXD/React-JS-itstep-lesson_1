import React, { Component } from 'react'

interface ISearchInputprops {
    search: string,
    onSearch: (value: string) => void
}

export default class SearchInput extends Component<ISearchInputprops> {

    render() {
        return (
            <div>
                <input type='text' value={this.props.search} 
                    onChange={(e)=>this.props.onSearch(e.target.value)}/>
                </div>
        )
    }
}
