import React, { Component } from 'react'
import ContactInfo from './ContactInfo'

export default class HeaderPhoto extends Component {

	constructor (props) {
        super(props)

        this.state = {
			firstName: props.firstName,
			lastName: props.lastName,
			address: props.address,
			contact: props.contact
        }
    }

    render() {
        return (
          <div className="header photo">

            <h1 id="title">{ this.state.firstName + ' ' + this.state.lastName }</h1>

            <div className="basic-info section">
              <div className="set">

                <p className="address">
                  <span className="value">{ this.state.address }</span>
                </p>

                <div className="r">
                  { this.state.contact.map((info) => {return <ContactInfo data={info}/>}) }
                </div>

                <div className="clear"> </div>
              </div>

              <div className="clear"> </div>
            </div>
            
          </div>
        )
    }
}