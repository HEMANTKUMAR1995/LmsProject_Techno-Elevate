
// import React from 'react'
// import { Button, ButtonGroup, Card, Form, Row } from 'react-bootstrap'
// import './Login.css'

// function Login() {
//   return (
//     <>
//       <div className='Main_div' ></div>
//       <div>
//         <Card className='content_card' style={{ width: '70%', height: '80%', display: 'flex', flexDirection: 'row', position: "absolute", left: "15%", top: '10%', border: '2px solid #253529', backgroundColor: 'GrayText', overflow: 'hidden' }}>
//           <Card.Img variant="top" src={require('./../Assests/loginimg.png')} style={{ width: "65%", borderRadius: '0px'}} />

//           <Card.Body style={{ backgroundColor: "GrayText", width: '50%' }}>
//             <Card.Title >
//               <img style={{ width: '60%', marginTop: "20%" }} src={require('./../Assests/Logo.png')} alt='' />
//               <h1 style={{ color: '#FFAA17', fontFamily: 'Abril Fatface', fontSize: '20px', fontWeight: 'bold', marginTop: '30px' }} >Login</h1>
//             </Card.Title>
//             <Card.Text >
//               <Row>
//               <Form style={{marginLeft:'45px'}} >
//                 <Form.Group style={{ textAlign: 'left', fontFamily: 'Agrandir Variable', fontSize: '12px', color: '#FFFFFF' }} className="mb-3" controlId="formGroupEmail">
//                   <Form.Label>Employee ID</Form.Label>
//                   <Form.Control style={{ borderRadius: '8px',padding:'4px',width:'250px' }} type="email" placeholder="Enter email" />
//                 </Form.Group>
//                 <Form.Group style={{ textAlign: 'left', fontFamily: 'Agrandir Variable', fontSize: '12px', color: '#FFFFFF' }} className="mb-3" controlId="formGroupPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control style={{ borderRadius: '8px',padding:'4px',width:'250px'  }} type="password" placeholder="Password" />
//                 </Form.Group>
//               </Form>
//               </Row>
//             </Card.Text>
//             <div>
//               <ButtonGroup style={{ border: "1px solid #FAA81D", borderRadius: '7px', width: '250px',height:'35px',marginTop:'-10px'}} className="mb-2">
//                 <Button style={{ backgroundColor: "#FAA81D", border: 'none'}} >Login</Button>
//                 <Button style={{ backgroundColor: "GrayText", border: 'none' }} >Cancel</Button>
//               </ButtonGroup>
//               <Card.Text style={{ fontSize: "14px", color: '#FFFFFF' }} >Already have an Account?<a href="link" style={{ fontWeight: '600', textDecoration: 'none', color: "#FFFFFF" }} > Register</a></Card.Text>
//               <Card.Text style={{ marginTop: '20px' }} ><a href='link' style={{ fontSize: "12px", textDecoration: 'none', color: "#FFFFFF" }} >Change Password</a></Card.Text>
//               <hr style={{ color: '#FFFFFF',marginTop:'70px' }} />
//               <Card.Text style={{marginTop:'-10px'}} ><p style={{ fontSize: '10px', color: '#FFFFFF' }} >Copyright &#169; Aleercio.com  &nbsp; &nbsp; &nbsp;  Terms & Conditions | Privacy Policy </p> </Card.Text>
//             </div>
//           </Card.Body>
//         </Card>
//       </div>
//     </>
//   )
// }

// export default Login

import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'react-bootstrap';

function Login() {
  return (
    <div>

      <Card style={{ width: '70vw', display: "flex", flexDirection: 'row', margin: "auto", height: '80vh', marginTop: "2.5%" }}>
        <Card.Img variant="top" src={require("./../Assests/loginimg.png")} style={{width:"70%"}} />
        <Card.Body style={{backgroundColor:'#000000A2'}} >
        <Card.Img variant="top" src={require("./../Assests/Logo.png")} style={{width:"70%"}} />
          <Card.Title style={{}} >Login</Card.Title>
          <Card.Text>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
          </Card.Text>
          <Button variant="primary" type="submit">
                Login
              </Button>

              <Button variant="primary" type="submit">
                Cancel
              </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login