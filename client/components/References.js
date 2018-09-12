//import React, { Component } from 'react'
import { LitElement, html } from '@polymer/lit-element';

class References extends LitElement {
  render() {
    return html`
      <div className="section section-references">
        <h2 className="title">${ references.title }</h2>
        <div className="set">
          <div className="item">
            <span className="info">
              ${ references.values.map((reference) => (
                html`<div key={reference.name}>
                  ${ reference.name }: ${ reference.value }
                </div>`
              ))}
            </span>
          </div>
        </div>
        <div className="clear"> </div>
      </div>
    `
  }
}

customElements.define('references', References);

export default References
