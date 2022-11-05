import React from 'react'

const containerStyle = {
	display: "grid",
	"grid-template-rows": "300px 1fr",
}

function LandingMessage() {
	const style = {
        margin: "auto",
        color: "black",
		position: "relative",
		float: "left",
		display: "inline-block",
    }

	return (
	<div style={style}>
		<div style={{"font-size": "3rem" }}>
			Driving in Seattle is hard but we can help!
		</div>

		<div style={{"font-size": "2rem" }}>
			Located on Beacon Hill, call to schedule an appointment today.
		</div>
	</div>)
}

function LandingFrame() {

	const bgstyle = {
		"background-image": `url(images/splash.png)`,
        "background-repeat": "no-repeat",
        "background-size": "100% 100%",
	}
    
    return <div style={bgstyle} />
}



const Landing = () => {
	return (
		<div style={containerStyle}>
			<LandingFrame />
			<LandingMessage />
		</div>
	)
}

export default Landing