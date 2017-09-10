import React, { Component } from 'react'

export default class Work extends Component {

    constructor (props) {
        super(props)

        this.state = {
            company: props.work.company,
            startDate: props.work.startDate,
            endDate: props.work.endDate,
            title: props.work.title,
            info: props.work.info
        }
    }

    render() {
        return (
            <div className="item">
                <h3>
                    <span className="company l">{this.state.company}</span>
                    <span className="date r">{this.state.startDate} &mdash; {this.state.endDate}</span>
                </h3>

                <div className="clear"> </div>
                <span className="job_title">{this.state.title}</span>

                <div className="info">

                    {this.state.info.map((line) => {return line.length < 1 ? line = <div key={"empty-work"}><br/></div> : line = <div key={line.name}>{line}</div>})}

                </div>
                <div className="clear"> </div>
            </div>
        )
    }
}