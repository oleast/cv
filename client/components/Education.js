import React, { Component } from 'react'

const Education = ({ education }) => (
    <div className="item">
        <h3>
            <span className="course l">{ education.course }</span>
            <span className="date r">{ education.startDate } &mdash; { education.endDate }</span>
        </h3>

        <div className="clear"> </div>
        <span className="school">{ education.school }</span>

        <div className="info">

            { education.info.map((line) => {
                return line.length < 1
                    ? <div key={"empty-edu"}><br/></div>
                    : <div key={line.name}>{ line }</div>
            })}

        </div>
        <div className="clear"> </div>
    </div>
)

export default Education
