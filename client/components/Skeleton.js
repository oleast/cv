import React, { Component } from 'react'

export default class Skeleton extends Component {

    constructor (props) {
        super(props)

        this.state = {
            thing: undefined
        }

        this.skeleFunction =  this.skeleFunction.bind(this)
    }

    skeleFunction() {
        
    }

    render() {
        return (
            <div></div>
        )
    }
}

<div className="section section-work">
					<h2 className="title">Arbeidserfaring</h2>
					<div className="set">
					<div className="item">

						<h3>
						<span className="company l">Ole Henry Stokker</span>
						<span className="date r">Juni 2015 &mdash; August 2015</span>
						</h3>

						<div className="clear"> </div>
						<span className="job_title">Sommerjobb - Diverse</span>

						<div className="info">
						Sommerjobb som hovedsaklig gikk ut på å lage rør til borerigger.
						<div>
							<br />
						</div>
						<div>Arbeidsoppgaver:</div>
						<div> - Kutte stålrør.</div>
						<div> - Lage gjenger i stålrør meg gjengemaskin.</div>
						</div>
						<div className="clear"> </div>
					</div>
					<div className="item">
						<h3>
						<span className="company l">Drift- og Utviklingskomiteen i Online, linjeforeningen for Informatikk ved NTNU</span>
						<span className="date r">August 2015 &mdash; Nåværende</span>
						</h3>
						<div className="clear"> </div>
						<span className="job_title">Drifter og Utvikler</span>
						<div className="info">
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
						<div className="clear"> </div>
					</div>
					</div>
					<div className="clear"> </div>
				</div>
				<div className="section section-education">
					<h2 className="title">Utdanning</h2>
					<div className="set">
					<div className="item">
						<h3>
						<span className="course l">Ungdomsskole</span>
						<span className="date r">Augist 2009 &mdash; Juni 2012</span>
						</h3>
						<div className="clear"> </div>
						<span className="school">Gjerdrum Ungdomsskole</span><span className="clear"> </span>
					</div>
					<div className="item">
						<h3>
						<span className="course l">Studiespesialiserende</span>
						<span className="date r">Augist 2012 &mdash; Juni 2015</span>
						</h3>
						<div className="clear"> </div>
						<span className="school">Nannestad Videregående Skole</span><div className="info">Studiespesialiserende på fokus på realfag.<div>Inkluderende Matematikk S1 og S2,</div><div>Fysikk 1, Teknologi og Forskningslære X,</div><div>Kjemi 1, Kjemi 2 og Biologi 2. </div></div><span className="clear"> </span>
						</div>
						<div className="item">
						<h3>
							<span className="course l">Bachelor i Informatikk (BiT)</span>
							<span className="date r">August 2015 &mdash; Nåværende</span>
						</h3>
						<div className="clear"> </div>
						<span className="school">NTNU</span><div className="info">Bachelorstudie i Informatikk ved NTNU i Trondheim, Gløshaugen. </div><span className="clear"> </span>
						</div>
					</div>
					<div className="clear"> </div>
				</div>
				<div className="section section-references">
					<h2 className="title">Referanser</h2>
					<div className="set">
					<div className="item">
						<span className="info">Dotkom leder: dotkom-leder@online.ntnu.no<div>Ole Henry Stokker: ohenstok@online.no eller 975 82 824</div></span>
					</div>
					</div>
					<div className="clear"> </div>
				</div>
				</div>
				<div id="credit"><a href={this.state.data.credit.value}>{this.state.data.credit.text}</a></div>
			</div>