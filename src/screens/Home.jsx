import React, { Component } from 'react'

export default class Home extends Component {
	readRssFeeds = e => {
		e.preventDefault();

		console.log('cool')
	}

    render () {
    	return (
    		<div className="container">
				<form className="rss-feed__form" onSubmit={ this.readRssFeeds }>
	    			<input type="url" className="rss-feed__input" placeholder="Enter url (eg. http://feeds.bbci.co.uk/news/rss.xml)"/>

	    			<button type="submit" className="rss-feed__button">Read Feeds</button>
				</form>
    		</div>
    	)
    }
}
