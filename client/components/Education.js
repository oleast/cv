import React, { Component } from 'react'

export default class Education extends Component {

    constructor (props) {
        super(props)

        this.state = {
            course: props.education.course,
            startDate: props.education.startDate,
            endDate: props.education.endDate,
            school: props.education.school,
            info: props.education.info
        }
        
    }

    render() {
        return (
            <div className="item">
                <h3>
                    <span className="course l">{this.state.course}</span>
                    <span className="date r">{this.state.startDate} &mdash; {this.state.endDate}</span>
                </h3>

                <div className="clear"> </div>
                <span className="school">{this.state.school}</span>

                <div className="info">

                    {this.state.info.map((line) => {return line.length < 1 ? line = <div key={"empty-edu"}><br/></div> : line = <div key={line.name} >{line}</div>})}

                </div>
                <div className="clear"> </div>
            </div>
        )
    }
}