import React, { Component } from 'react'
import Photo from './Photo'
import HeaderPhoto from './HeaderPhoto'
import WorkWrapper from './WorkWrapper'
import EducationWrapper from './EducationWrapper'
import References from './References'

export default class CV extends Component {

	constructor (props) {
        super(props)

        this.state = {
            data: {
				firstName: 'Ole Anders',
				lastName: 'Stokker',
				address: 'Odd Brochmanns Veg 57',
				photo: 'http://files1.cvmkr.com/2fdd53_1956599_4658380.jpg',
				contact: [
					{class: 'email', label: 'Epost', value: 'olestokker@outlook.com'},
					{class: 'website', label: 'Nettside', value: 'https://stokkers.no'},
					{class: 'phone', label: 'Telefonnummer', value: '47 68 44 66'}
				],
				work: { 
					title: 'Arbeidserfaring',
					values: [
						{
							company: 'Ole Henry Stokker',
							startDate: 'Juni 2015',
							endDate: 'August 2015',
							title: 'Sommerjobb - Diverse',
							info: [
								'Sommerjobb som hovedsaklig gikk ut på å lage rør til borerigger.',
								'',
								'Arbeidsoppgaver:',
								' - Kutte stålrør.',
								' - Lage gjenger i stålrør meg gjengemaskin.'
							]
						},{
							company: 'Drift- og Utviklingskomiteen i Online, linjeforeningen for Informatikk ved NTNU',
							startDate: 'August 2015',
							endDate: 'Nåværende',
							title: 'Drifter og Utvikler',
							info: [
								'Som drifter og utvikler i Drift- og Utviklingskomiteen i Online har jeg hatt en arena å ta mange av de teoretiske prinsippene jeg lærer på Informatikkstudiet ved NTNU inn i praktisk bruk.',
								'I Drift- og Utviklingskomiteen har jeg en rekke arbeidsoppgaver:',
								' - Drift og vedlikehold av maskinvare. Inkluderer egne rackservere, inkludert hypervisors og lagringsservere.',
								' - Vedlikehold, utvikling og automatisering av softwareløsninger på våre egne servere og servere i skyen.',
								' - Utvikling av nye og gamle programvareløsninger for lineforeningen, inkludert linjeforeningens nettsted: online.ntnu.no.',
								'    Dette innebærer også å lære om og å ta nytte av de nyeste løsningene innenfor software.',
								' - Opplæring og dokumentasjon for å hjelpe nye medlemmer til å kunne videre overta arbeidsoppgavene mine.'
							]
						}
					]
				},
				education: { 
					title: 'Arbeidserfaring',
					values: [
						{
							course: 'Ungdomsskole',
							startDate: 'August 2009',
							endDate: 'Juni 2012',
							school: 'Gjerdrum Ungdomsskole',
							info: [
								'Sommerjobb som hovedsaklig gikk ut på å lage rør til borerigger.',
								'Arbeidsoppgaver:',
								' - Kutte stålrør.',
								' - Lage gjenger i stålrør meg gjengemaskin.'
							]
						}, {
							course: 'Studiespesialiserende',
							startDate: 'August 2012',
							endDate: 'Juni 2015',
							school: 'Nannestad Videregående Skole',
							info: [
								'Studiespesialiserende på fokus på realfag.',
								'Inkluderende Matematikk S1 og S2,',
								'Fysikk 1, Teknologi og Forskningslære X,',
								'Kjemi 1, Kjemi 2 og Biologi 2.'
							]
						}, {
							course: 'Bachelor i Informatikk (BiT)',
							startDate: 'August 2015',
							endDate: 'Nåværende',
							school: 'NTNU',
							info: [
								'Bachelorstudie i Informatikk ved NTNU i Trondheim, Gløshaugen.'
							]
						},
					]
				},
				references: {
					title: 'Referanser',
					values: [
						{
							name: 'Dotkom leder',
							value: 'dotkom-leder@online.ntnu.no'
						}, {
							name: 'Ole Henry Stokker',
							value: 'ohenstok@online.no eller 975 82 824'
						}
					]
				},
				credit: { text: 'stokkers.no', value: 'https://stokkers.no/' }
        	}
    	}
	}

	render () {
		return (
			<div>
				<div id="main">

					<Photo photo={this.state.data.photo} />

					<HeaderPhoto
						firstName={this.state.data.firstName}
						lastName={this.state.data.lastName}
						address={this.state.data.address}
						contact={this.state.data.contact}
					/>

					<div className="clear"> </div>

					<WorkWrapper work={this.state.data.work} />

					<EducationWrapper education={this.state.data.education} />

					<References references={this.state.data.references} />

				</div>
				<div id="credit"><a href={this.state.data.credit.value}>{this.state.data.credit.text}</a></div>
			</div>
		)
	}
}