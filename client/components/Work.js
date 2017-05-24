import React, { Component } from 'react'

export default class Work extends Component {

    constructor (props) {
        super(props)

        /*this.state = {
            company: this.props.work.company,
            startDate: this.props.work.startDate,
            endDate: this.props.work.endDate,
            title: this.props.work.title,
            info: this.props.work.info
        }*/
        
    }

    render() {
        return (
            <div className="item">
                <h3>
                    <span className="company l">{this.props.work.company}</span>
                    <span className="date r">{this.props.work.startDate} &mdash; {this.props.work.endDate}</span>
                </h3>

                <div className="clear"> </div>
                <span className="job_title">{this.props.work.title}</span>

                <div className="info">

                    {this.props.work.info.map((line) => {return line.length < 1 ? line = <div><br/></div> : line = <div>{line}</div>})}

                </div>
                <div className="clear"> </div>
            </div>
        )
    }
}