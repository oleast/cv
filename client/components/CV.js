import React, { Component } from 'react'

import axios from 'axios'

// Import React Components
import Photo from './Photo'
import HeaderPhoto from './HeaderPhoto'
import WorkWrapper from './WorkWrapper'
import EducationWrapper from './EducationWrapper'
import References from './References'

export default class CV extends Component {

	constructor (props) {
        super(props)

        /*this.state = {
			firstName: '', lastName: '', address: '', photo: '',
			contact: [{class: '', label: '', value: ''}],
			work: { title: '', values: [{ company: '', startDate: '', endDate: '', title: '', info: ['']}]
			}, education: { title: '', values: [{ course: '', startDate: '', endDate: '', school: '', info: ['']}]},
			references: { title: '', values: [{ name: '', value: ''}]},
			credit: { text: '', value: '' }
		}*/
		this.state = {render: false}

		this.getCvData = this.getCvData.bind(this)
	}

	componentWillMount() {
        /* This method is called after first render */
        this.getCvData()
    }

	getCvData () {
		axios
			.get("/api/cv")
			.then(request => {
				request.data.data.render = true
				this.setState(request.data.data, () => {
					console.log(this.state)
				})
        	})
			.catch(err => {
				console.log(err)
			})
	}

	render () {
		if (this.state.render) {
			return (
				<div>
					<div id="main">

						<Photo photo={this.state.photo} />

						<HeaderPhoto
							firstName={this.state.firstName}
							lastName={this.state.lastName}
							address={this.state.address}
							contact={this.state.contact}
						/>

						<div className="clear"> </div>

						<WorkWrapper work={this.state.work} />

						<EducationWrapper education={this.state.education} />

						<References references={this.state.references} />

					</div>
					<div id="credit"><a href={this.state.credit.value}>{this.state.credit.text}</a></div>
				</div>
			)
		} else {
			return (<div><p>No API data</p></div>)
		}
	}
}