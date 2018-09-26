import axios from 'axios'
import React, { Component } from 'react'

export default class Form extends Component {
	state = { url: '' }

	/**
	 * Fetch feeds from api
	 * @param  {ReactEvent} e
	 * @return
	 */
	readRssFeeds = e => {
		e.preventDefault();

		axios.get('http://127.0.0.1:5000/rss_feed/read', {params: {url: this.state.url }})
			.then(({data}) => this.props.onFeedsReceive(data.data))
			.catch(_ => alert('Whoops! something went wrong.'))
	}

	render () {
		return (
			<div className="container container--centered-children">
				<form className="rss-feed__form" onSubmit={ this.readRssFeeds }>
					<input
					onChange={ e => this.setState({ url: e.target.value }) }
					type="url"
					className="rss-feed__input"
					placeholder="Enter url (eg. http://feeds.bbci.co.uk/news/rss.xml)"/>

					<button
					type="submit"
					className="rss-feed__button"
					disabled={ ! this.state.url }>Read Feeds</button>
				</form>
			</div>
		)
	}
}
