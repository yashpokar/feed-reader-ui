import React, { Component } from 'react'

export default class Feed extends Component {
	render () {
		const item = {}

		this.props.items.forEach(tags => {
			let body = tags.text

			if (tags.tag === 'thumbnail') {
				body = tags.attributes.url
			}

			item[tags.tag] = body
		})

		return (
			<div className="feed-item">
				<span className="feed-item__title">
					<a href={item.link} className="feed-item__link">{item.title}</a>
				</span>
				<p className="feed-item__description">{item.description}</p>
			</div>
		)
	}
}
