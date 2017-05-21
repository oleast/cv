import React, { Component } from 'react'
import Photo from './Photo'
import HeaderPhoto from './HeaderPhoto'

export default class CV extends Component {
  render () {
    return (
      <div>
        <div id="main">

          <Photo/>
          <HeaderPhoto/>

          <div class="clear"> </div>
          <div class="section section-work">
            <h2 class="title">Arbeidserfaring</h2>
            <div class="set">
              <div class="item">

                <h3>
                  <span class="company l">Ole Henry Stokker</span>
                  <span class="date r">Juni 2015 &mdash; August 2015</span>
                </h3>

                <div class="clear"> </div>
                <span class="job_title">Sommerjobb - Diverse</span>

                <div class="info">
                  Sommerjobb som hovedsaklig gikk ut på å lage rør til borerigger.
                  <div>
                    <br />
                  </div>
                  <div>Arbeidsoppgaver:</div>
                  <div> - Kutte stålrør.</div>
                  <div> - Lage gjenger i stålrør meg gjengemaskin.</div>
                </div>
                <div class="clear"> </div>
              </div>
              <div class="item">
                <h3>
                  <span class="company l">Drift- og Utviklingskomiteen i Online, linjeforeningen for Informatikk ved NTNU</span>
                  <span class="date r">August 2015 &mdash; Nåværende</span>
                </h3>
                <div class="clear"> </div>
                <span class="job_title">Drifter og Utvikler</span>
                <div class="info">
                  Som drifter og utvikler i Drift- og Utviklingskomiteen i Online har jeg hatt en arena å ta mange av de teoretiske prinsippene jeg lærer på Informatikkstudiet ved NTNU inn i praktisk bruk.
                  <div>
                    <br />
                  </div>
                  <div>I Drift- og Utviklingskomiteen har jeg en rekke arbeidsoppgaver:</div>
                  <div> - Drift og vedlikehold av maskinvare. Inkluderer egne rackservere, inkludert hypervisors og lagringsservere.</div>
                  <div> - Vedlikehold, utvikling og automatisering av softwareløsninger på våre egne servere og servere i skyen.</div>
                  <div> - Utvikling av nye og gamle programvareløsninger for lineforeningen, inkludert linjeforeningens nettsted: online.ntnu.no.</div>
                  <div>   Dette innebærer også å lære om og å ta nytte av de nyeste løsningene innenfor software.</div>
                  <div> - Opplæring og dokumentasjon for å hjelpe nye medlemmer til å kunne videre overta arbeidsoppgavene mine.</div>
                </div>
                <div class="clear"> </div>
              </div>
            </div>
            <div class="clear"> </div>
          </div>
          <div class="section section-education">
            <h2 class="title">Utdanning</h2>
            <div class="set">
              <div class="item">
                <h3>
                  <span class="course l">Ungdomsskole</span>
                  <span class="date r">Augist 2009 &mdash; Juni 2012</span>
                </h3>
                <div class="clear"> </div>
                <span class="school">Gjerdrum Ungdomsskole</span><span class="clear"> </span>
              </div>
              <div class="item">
                <h3>
                  <span class="course l">Studiespesialiserende</span>
                  <span class="date r">Augist 2012 &mdash; Juni 2015</span>
                </h3>
                <div class="clear"> </div>
                  <span class="school">Nannestad Videregående Skole</span><div class="info">Studiespesialiserende på fokus på realfag.<div>Inkluderende Matematikk S1 og S2,</div><div>Fysikk 1, Teknologi og Forskningslære X,</div><div>Kjemi 1, Kjemi 2 og Biologi 2. </div></div><span class="clear"> </span>
                </div>
                <div class="item">
                  <h3>
                    <span class="course l">Bachelor i Informatikk (BiT)</span>
                    <span class="date r">August 2015 &mdash; Nåværende</span>
                  </h3>
                  <div class="clear"> </div>
                  <span class="school">NTNU</span><div class="info">Bachelorstudie i Informatikk ved NTNU i Trondheim, Gløshaugen. </div><span class="clear"> </span>
                </div>
              </div>
            <div class="clear"> </div>
          </div>
          <div class="section section-references">
            <h2 class="title">Referanser</h2>
            <div class="set">
              <div class="item">
                <span class="info">Dotkom leder: dotkom-leder@online.ntnu.no<div>Ole Henry Stokker: ohenstok@online.no eller 975 82 824</div></span>
              </div>
            </div>
            <div class="clear"> </div>
          </div>
        </div>
        <div id="credit"><a href="https://stokkers.no/">stokkers.no</a></div>
      </div>
    )
  }
}