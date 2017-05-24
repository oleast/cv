import React, { Component } from 'react'

export default class References extends Component {

    constructor (props) {
        super(props)

        this.state = {
            title: props.references.title,
            values: props.references.values
        }
    }

    render() {
        return (
            <div className="section section-references">
                <h2 className="title">{this.state.title}</h2>
                <div className="set">
                    <div className="item">
                        <span className="info">
                            {this.state.values.map((reference) => <div>{reference.name}: {reference.value}</div>)}
                        </span>
                    </div>
                </div>
                <div className="clear"> </div>
            </div>
        )
    }
}