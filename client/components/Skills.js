import React, { Component } from 'react'

const Skills = ({ skills }) => (
    <div className="item">
        <span className="job_title">{skills.name}</span>
        <div className="skill-info">
            {skills.values.map((item) => {return item.length < 1 ? item = <div key={"empty-skill"}><br/></div> : item = <div key={item}>- {item}</div>})}
        </div>
        <div className="clear"> </div>
    </div>
)

export default Skills