import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'

function AdultsCard() {
    return (
        <Card style={{ height: "100%", "border-radius": ".5rem" }}>
        <Card.Body>
          <Card.Title>Adults (18 and over)</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Steps before testing:</Card.Subtitle>
          <Card.Text>
          <ListGroup  as="ol" numbered variant="flush">
            <ListGroup.Item as="li">
                Pre-apply for your license online through <a href="http://www.dol.wa.gov/driverslicense/preapply.html">Washington State Department of Licensing's website</a>. <strong id="strongtest">Make sure you know your Washington State identification/permit number before the test.</strong>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                Pass the knowledge test at Hong Kong Driving School.
            </ListGroup.Item>
            <ListGroup.Item as="li">
                Pass the skill test at Hong Kong Driving School.
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Stop by a Washington State department of Licensing location to pick up your license.
            </ListGroup.Item>
        </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  function TeensCard() {
    return (
      <Card style={{ height: "100%", "border-radius": ".5rem"}}>
        <Card.Body>
          <Card.Title>Teens (16 and 17 years old)</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Steps before testing:</Card.Subtitle>
          <Card.Text>
          <ListGroup  as="ol" numbered variant="flush">
            <ListGroup.Item as="li">
              Complete the Teenage Drivers Education Program at Hong Kong Driving School.           
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Have your instruction permit for at least 6 months.
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Pass the knowledge test.
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Pass the skill test.
            </ListGroup.Item>
        </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  function KnowledgeTestCard() {
    return (
      <Card style={{ height: "100%", "border-radius": ".5rem"}}>
        <Card.Body>
          <Card.Title>Knowledge Test</Card.Title>
          <Card.Text>
          The knowledge test is available in 7 languages: English, Chinese, Vietnamese, Japanese, Spanish, Korean and Russian.
          We recommend practicing on <a target="_blank" rel="noopener noreferrer" href="http://www.dol.wa.gov/driverslicense/practicetest.html">Department of Licencing's website</a> to prepare for the knowledge test.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }


const Testing = () => {

	const style = {
        margin: "auto",
        color: "black",
    }

    return(
		<div style={style}>
            <div style={{"text-align": "center", "font-size": "3rem"}}>
            Testing
            </div >
        

            <div style={{"font-size": "1.5rem" }}>
                Hong Kong Driving School is an authorized Washington State testing location. Both the knowledge and skills test can be taken at our location.
            </div>

            <div style={{display: "grid", "grid-template-rows": "1fr 1fr", "row-gap": "2%"}}>
                <AdultsCard />
                <TeensCard />     
                <KnowledgeTestCard />       
            </div>
		</div>
    )
}

export default Testing