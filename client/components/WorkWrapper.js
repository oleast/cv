import React, { Component } from 'react'
import Work from './Work'

export default class WorkWrapper extends Component {

    constructor (props) {
        super(props)

		this.state = {
			title: props.work.title,
			values: props.work.values
		}
    }

    render() {
        return (
            <div className="section section-work">
				<h2 className="title">{this.state.title}</h2>
				<div className="set">

					{this.state.values.map((value) => { return <Work work={value} />})}

				</div>
				<div className="clear"> </div>
			</div>
        )
    }
}
