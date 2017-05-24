import React, { Component } from 'react'
import Education from './Education'

export default class EducationWrapper extends Component {

    constructor (props) {
        super(props)

		/*this.state = {
			title: this.props.education.title,
			values: this.props.education.values
		}*/
    }

    render() {
        return (
            <div className="section section-education">
				<h2 className="title">{this.props.education.title}</h2>
				<div className="set">

					{this.props.education.values.map((value) => { return <Education education={value} />})}

				</div>
				<div className="clear"> </div>
			</div>
        )
    }
}