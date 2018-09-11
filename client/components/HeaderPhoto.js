import React from 'react'
import ContactInfo from './ContactInfo'

const HeaderPhoto = ({ firstName, lastName, address, contact }) => (
  <div className="header photo">

    <h1 id="title">{ firstName + ' ' + lastName }</h1>

    <div className="basic-info section">
      <div className="set">

        <p className="address">
          <span className="value">{ address }</span>
        </p>

        <div className="r">
          { contact.map((info) => (<ContactInfo data={info}/>)) }
        </div>

        <div className="clear"> </div>
      </div>

      <div className="clear"> </div>
    </div>
    
  </div>
)

export default HeaderPhoto
