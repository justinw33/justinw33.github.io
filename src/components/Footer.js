import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer--pin">
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Hong Kong Driving School
                    </Col>
                </Row>
            </Container>
            
        </footer>
    )
}

export default Footer


// import React from 'react'
// import { Container, Row, Col , Navbar} from 'react-bootstrap'

// const Footer = () => {
//     const style= {
//         width: "100%",
//         position: "absolute",
//       left: "0",
//       bottom: "0",
//       right:"0",

//     }

//     // const style= {
//     //     "margin-top": "auto",
//     //     padding: "8px",
//     //     width: "100%",
//     //           left: "0",
//     //   bottom: "0",
//     //   right:"0",
//     // }
//     return (
//         <footer style={style}>
//         <Navbar className="justify-content-center" bg="dark">
       
//             <Navbar.Text>            
//                 Copyright &copy; Hong Kong Driving School of Seattle
//             </Navbar.Text>
              
//         </Navbar>
//         </footer>
//     )
// }

// export default Footer
