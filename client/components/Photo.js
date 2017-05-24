import React, { Component } from 'react'

export default class Photo extends Component {

    constructor (props) {
        super(props)

        /*this.state = {
            photo: this.props.photo
        }*/
    }

    render() {
        return (
            <div id="photo">
                <img src={this.props.photo} alt="" />
            </div>
        )
    }
}