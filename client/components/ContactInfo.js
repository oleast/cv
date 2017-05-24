import React, { Component } from 'react'

export default class Skeleton extends Component {

    constructor (props) {
        super(props)

        /*this.state = {
            class: this.props.data.class,
            label: this.props.data.label,
            value: this.props.data.value
        }*/
    }

    render() {
        return (
            <p className={ this.props.data.class }>
                <label>{ this.props.data.label }
                    <span className="colon">:</span>
                </label> 
                <span className="value">{ this.props.data.value }</span>
            </p>
        )
    }
}