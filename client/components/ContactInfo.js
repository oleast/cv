import React, { Component } from 'react'

export default class Skeleton extends Component {

    constructor (props) {
        super(props)

        this.state = {
            class: props.data.class,
            label: props.data.label,
            value: props.data.value
        }
    }

    render() {
        return (
            <p className={ this.state.class }>
                <label>{ this.state.label }
                    <span className="colon">:</span>
                </label> 
                <span className="value">{ this.state.value }</span>
            </p>
        )
    }
}