import React from 'react'
import { ButtonGroup, Form, Row } from 'react-bootstrap'
// import { Button, Card } from 'react-bootstrap'
import './Login.css' 

function LoginPage() {
    return (
        <div className='Main_div'  >
            <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 gx-0' style={{marginLeft:'200px',marginTop:'80px'}} >
                <Row>
                    <img className='col-lg-8 col-md-8 col-sm-8  col-xs-8 gx-0' src={require('./../Assests/image.png')} alt='' style={{height:'505px',borderRadius:'5px 0px 0px 5px'}} />
                    <div  className='col-lg-4 col-sm-8 col-md-8 col-xs-8 gx-0 ' style={{overflow:'hidden',backgroundColor:'#000000A2',borderRadius:'0px 5px 5px 0px'}}  >
                        <img src={require('./../Assests/Logo.png')} alt='' style={{width:'150px'}} className='mt-5'/>
                        <h1 style={{color:'#FFAA17',fontSize:'30px',fontFamily:'Abril Fatface'}} className='mt-2'>Login</h1>
                    <Form className='mt-3' style={{textAlign:'left',fontSize:'12px' ,color:'#FFFFFF'}} >
                        <Form.Group className="mb-2"  style={{marginLeft:'40px '}} controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>  
                            <Form.Control type="email" placeholder="Enter email" style={{width:'90%',padding:'2px',fontSize:'14px'}} />
                        </Form.Group>
                        <Form.Group className="mb-2" style={{marginLeft:'40px '}} controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" style={{width:'90%',padding:'2px',fontSize:'14px'}} />
                        </Form.Group>
                    </Form><ButtonGroup style={{borderRadius:'5px',backgroundColor:'#FFAA17'}} >
                   <button style={{padding:'5px 20px',fontSize:'10px',border:'none',backgroundColor:'#FFAA17',borderRadius:'3px',color:'#FFFFFF'}} >Login</button>
                   <button style={{padding:'5px 20px',fontSize:'10px',border:'none',backgroundColor:'#000000A2',borderRadius:'3px',color:'#FFFFFF'}} >Cancel</button>
                   </ButtonGroup>
                   <p style={{ fontSize: "12px", color: '#FFFFFF' ,marginTop:'5px'}} >Already have an account?<a style={{ fontSize: "12px", textDecoration: 'none', color: "#FFFFFF",fontWeight:'600' }} href='facebook.com'>Register.</a> </p>
                   <br/>
                   <p style={{marginTop:'60px'}} ><a style={{ fontSize: "12px", color: '#FFFFFF',textDecoration:'none'}} href='myntraa.com' >Change Password</a></p>
                   <hr style={{marginTop:'-10px',color:'#FFFFFF',width:'250px',marginLeft:'20px'}} />
                   <p style={{ fontSize: '9px', color: '#FFFFFF',marginTop:'-10px' }} >Copyright &#169; Aleercio.com  &nbsp; &nbsp; &nbsp;  Terms & Conditions | Privacy Policy </p>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default LoginPage