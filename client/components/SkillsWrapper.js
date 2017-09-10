import React, { Component } from 'react'
import Skills from './Skills'

const SkillsWrapper = ({ skills }) => (
    <div className="section section-work">
        <h2 className="title">{skills.title}</h2>
        <div className="skill-set">
            {skills.values.map((value) => { return <Skills key={value.name} skills={value} />})}
        </div>
        <div className="clear"> </div>
    </div>
)

export default SkillsWrapper