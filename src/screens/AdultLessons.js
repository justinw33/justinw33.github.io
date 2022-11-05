import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'

function LessonInfo() {
    return (
      <Card style={{ height: "100%", "border-radius": ".5rem"}}>
        <Card.Body>
          <Card.Title>Adults (18 and over)</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Steps before first lesson:</Card.Subtitle>
          <Card.Text>

            <ListGroup  as="ol" numbered variant="flush">
                <ListGroup.Item as="li">
                    Pre-apply for a permit, follow the directions on the <a href="http://www.dol.wa.gov/">Department of Licensing's</a> website. 
                    <strong id="strongtest">Be sure to record your Washington State permit number, this will be important for future steps.</strong>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Take the knowledge test. Recommend practicing on the <a target="_blank" rel="noopener noreferrer" href="http://www.dol.wa.gov/driverslicense/practicetest.html">Department of Licencing's website</a>.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    After passing the knowledge test, pick up your instruction permit from a <a href="http://www.dol.wa.gov/officelocations.html">Deparment of licensing office location</a>.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Schedule your driving lessons at Hong Kong Drivng school by calling (206) 669 - 2822.
                </ListGroup.Item>
             </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

const AdultLessons = () => {

	const style = {
        margin: "auto",
        color: "black",
    }
    return(
		<div style={style}>
            <div style={{"text-align": "center", "font-size": "3rem"}}>
            Adult Lessons
            </div >

            <div style={{display: "grid", "grid-template-rows": "1fr 1fr", "row-gap": "2%"}}>
              <LessonInfo />
            </div>
		</div>


    )
}

export default AdultLessons