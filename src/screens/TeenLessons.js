import React from 'react'
import {Card, ListGroup, Table} from 'react-bootstrap'

function Schedule() {
    return (

        <Card  style={{ height: "100%", "border-radius": ".5rem", "margin-bottom": "15px"}}>
        <Card.Body>
        <Card.Title>Enrollment Dates</Card.Title>

        <Table striped bordered size="sm">
        <thead>
            <tr>
                <th>Start Date</th>
                <th>Days of the Week</th>
                <th>Time</th>
                <th>Fee</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>September 19, 2022</td>
                <td>Monday, Tuesday, Wednesday</td>
                <td>6:00pm - 8:00pm</td>
                <td>$680</td>
                <td>6 weeks</td>
            </tr>
        </tbody>
    </Table>

        </Card.Body>
        </Card>

    );
  }

  function EnrollmentSteps() {
    return (
      <Card style={{ height: "100%", "border-radius": ".5rem"}}>
        <Card.Body>
          <Card.Title>Enrollment Steps</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Steps:</Card.Subtitle>
          <Card.Text>
            <ListGroup  as="ol" numbered variant="flush">
                <ListGroup.Item as="li">
                    Must be at least 15 years old.  
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Register for the Teenage Driving Program <a href="/contact">on-site</a> or print and fill out the permission form and submit it by the first day of class.
                    <br></br>
                    <br></br>
                    <a href="files/teen_permission_slip.pdf">Teen Permission Form</a>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Once enrolled, we will provide an instruction permit waiver. The waiver will allow you to apply for a instruction permit without taking the knowledge test. 
                    Pre-apply for your <a href="http://www.dol.wa.gov/driverslicense/preapply.html"> permit online</a> once you have submitted your permission paperwork.
                </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  function CourseInfo() {
    return (
      <Card style={{ height: "100%", "border-radius": ".5rem"}}>
        <Card.Body>
          <Card.Title>Course Information</Card.Title>
          <Card.Text>
            The course consist of 30 hours of classroom instruction, 6 hours behind the wheel training and 1 hour of behind the wheel observation. 
            In our program, you will learn valuable concepts that include:

            <ul class="list_info">
                <li class="list_item">Fundamentals of Safe Driving</li>
                <li class="list_item">Basic Vehicle Control</li>
                <li class="list_item">Roadway Markings, Signs, Signals</li>
                <li class="list_item">IPDE process</li>
                <li class="list_item">Sharing the Road</li>
                <li class="list_item">Driving Environments</li>
                <li class="list_item">Driving in Adverse Conditions</li>
                <li class="list_item">Handling Emergencies</li>
                <li class="list_item">Parking</li>
            </ul>

            After completing driver's ed course, take the knowledge and skills test. More information on <a href="/testing">testing here</a>. 
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }



const TeenLessons = () => {
    return(
        <>
        <div style={{"text-align": "center", "font-size": "3rem"}}>
        Teen Lessons
        </div >
        <Schedule />
        <div style={{display: "grid", "grid-template-rows": "1fr 1fr", "row-gap": "2%"}}>
            <EnrollmentSteps />
            <CourseInfo />
        </div>
        </>

    )
}

export default TeenLessons