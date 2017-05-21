import React, { Component } from 'react'

export default class HeaderPhoto extends Component {
    render() {
        return (
          <div class="header photo">

            <h1 id="title">Ole Anders Stokker</h1>

            <div class="basic-info section">
              <div class="set">

                <p class="address">
                  <span class="value">Odd Brochmanns Veg 57</span>
                </p>

                <div class="r">
                  <p class="email"><label>Epost<span class="colon">:</span></label> <span class="value">olestokker@outlook.com</span></p>
                  <p class="website"><label>Nettside<span class="colon">:</span></label> <span class="value">stokkers.no</span></p>
                  <p class="phone"><label>Telefonnummer<span class="colon">:</span></label> <span class="value">47684466</span></p>
                </div>

                <div class="clear"> </div>
              </div>

              <div class="clear"> </div>
            </div>
            
          </div>
        )
    }
}