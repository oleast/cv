import React from 'react'

const ContactInfo = ({ data }) => (
    <p className={ data.class }>
        <label>{ data.label }
            <span className="colon">:</span>
        </label> 
        <span className="value">{ data.value }</span>
    </p>
)

export default ContactInfo
