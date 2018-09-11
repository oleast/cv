import React, { Component } from 'react'
import Education from './Education'

const EducationWrapper = ({ education }) =>(
	<div className="section section-education">
		<h2 className="title">{education.title}</h2>
		<div className="set">

			{ education.values.map((value) => (<Education key={value.name} education={value} />)) }

		</div>
		<div className="clear"> </div>
	</div>
)

export default EducationWrapper
