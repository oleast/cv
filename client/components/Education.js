import React, { Component } from 'react'

export default class Education extends Component {

    constructor (props) {
        super(props)

        /*this.state = {
            course: this.props.education.course,
            startDate: this.props.education.startDate,
            endDate: this.props.education.endDate,
            school: this.props.education.school,
            info: this.props.education.info
        }*/
        
    }

    render() {
        return (
            <div className="item">
                <h3>
                    <span className="course l">{this.props.education.course}</span>
                    <span className="date r">{this.props.education.startDate} &mdash; {this.props.education.endDate}</span>
                </h3>

                <div className="clear"> </div>
                <span className="school">{this.props.education.school}</span>

                <div className="info">

                    {this.props.education.info.map((line) => {return line.length < 1 ? line = <div><br/></div> : line = <div>{line}</div>})}

                </div>
                <div className="clear"> </div>
            </div>
        )
    }
}