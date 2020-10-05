import React, { Component } from 'react'

export default class About extends Component {

    goBack = () => {
        // this.props.history.goBack()
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>About Component</h1>
                <div><button onClick={this.goBack} >Go Home</button></div>
            </div>
        )
    }
}
