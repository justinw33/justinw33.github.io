import React from 'react'
import {Card} from 'react-bootstrap'

function LessonInfo() {
    return (
    <Card className="text-center" style={{ height: "100%", "border-radius": ".5rem" }}>
        <Card.Body>
            <Card.Text>
                Hours: Appointment only<br/><br/>

                Address:<br/>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Hong+Kong+Driving+School/@47.5604126,-122.3042841,15z/data=!4m5!3m4!1s0x0:0xe7f17d8c52377513!8m2!3d47.5604126!4d-122.3042841">
                4720 Beacon Avenue South<br/>
                Seattle, WA 98108<br/></a><br/>

                email: hongkongdrivingschoolseattle@gmail.com<br/>
                phone: (206) 669 - 2822<br/><br/>
            </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="images/location.png" />
    </Card>
    );
  }

const Contact = () => {
	const style = {
        margin: "auto",
        color: "black",
    }
    return(
		<div style={style}>
            <div style={{"text-align": "center", "font-size": "3rem"}}>Contact and Location</div>

            <div style={{display: "grid", "grid-template-rows": "1fr 1fr", "row-gap": "2%"}}>
              <LessonInfo />
            </div>
		</div>


    )
}

export default Contact