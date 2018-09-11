import React, { Component } from 'react'
import Work from './Work'

const WorkWrapper = ({ work }) => (
	<div className="section section-work">
		<h2 className="title">{ work.title }</h2>
		<div className="set">

			{ work.values.map((value) => (<Work key={value.name} work={value} />)) }

		</div>
		<div className="clear"> </div>
	</div>
)

export default WorkWrapper
