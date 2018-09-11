import React, { Component } from 'react'

const References = ({ references }) => (
    <div className="section section-references">
        <h2 className="title">{ references.title }</h2>
        <div className="set">
            <div className="item">
                <span className="info">
                    { references.values.map((reference) => (
                        <div key={reference.name}>
                            { reference.name }: { reference.value }
                        </div>
                    ))}
                </span>
            </div>
        </div>
        <div className="clear"> </div>
    </div>
)

export default References
