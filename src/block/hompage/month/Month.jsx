import React from 'react'
import './Month.css'

const month = () => {
	return (
		<section className="month">
			<div className="month-text">
				<h1>
					Meet Our Saver of the Month
				</h1>
				<p>
					Every month, we shine a spotlight on one saver, asking them about their savings culture and how Piggyvest has helped them.
				</p>
			</div>
			<div className="month-video">
				<iframe
					width="100%"
					height="400"
					src="https://www.youtube.com/embed/aiSv7EUoSKc?si=M19k5-9xgdxMvO1O"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</div>
		</section>
	)
}

export default month