import Form from './../components/Form'
import Feed from './../components/Feed'
import React, { Component } from 'react'

export default class Home extends Component {
	state = {
		feeds: {},
		gotFeeds: false,
	}

	/**
	 * When form component will recive feeds
	 * @param  {Object} feeds
	 * @return {null}
	 */
	onFeedsReceive = feeds => this.setState({ feeds, gotFeeds: true })

    render () {
    	const feeds = this.state.feeds;

    	return (
    		<div className="container">
    			{
    				! this.state.gotFeeds ?
    					<Form onFeedsReceive={ this.onFeedsReceive } /> :
    					<div className="container">
    						<header className="feeds-header">
    							<img src={feeds.meta.image} alt={feeds.meta.title} className="feeds-header__image"/>

    							<h2 className="feeds-header__title">
    								<a href={feeds.meta.link} className="feeds-header__link">
    									{feeds.meta.title}
    								</a>
    							</h2>
    						</header>

    						<div className="feeds-body">
    							{ feeds.items.map((items, i) => <Feed key={i} items={items} />) }
    						</div>
    					</div>
    			}
    		</div>
    	)
    }
}
