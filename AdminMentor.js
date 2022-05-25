import React, { useState } from 'react'
import { Button, Container, Form, Modal, Navbar, Table } from 'react-bootstrap'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function AdminMentor() {
  const [chips] = useState(["react",'java','python'])
  const [show, setShow] = useState(false);
  const handleDelete = () => {
    alert("You Clicked On Remove Button........!")
     };
     let functionOnEditClick=()=>{
         alert("You Clicked On Edit Icon.......!")
     }
     let functionOnDeleteClick=()=>{
         alert("You Clicked On Delete Icon")
     }
      let handleClose = () => setShow(false);
      let handleShow = () => setShow(true);
    
  return (
    <div>
     <>
           
           <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
               <Modal.Title>Add New Mentor </Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <Form>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Mentor Name</Form.Label>
                   <Form.Control
                     type="text"
                     autoFocus
                   />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Employee ID</Form.Label>
                   <Form.Control
                     type="text"
                     autoFocus
                   />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Email Id</Form.Label>
                   <Form.Control
                     type="text"
                     autoFocus
                   />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Skills</Form.Label>
                   <Form.Control
                     type="text"
                     autoFocus
                   />
                 </Form.Group>
               </Form>
             </Modal.Body>
             <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                 Close
               </Button>
               <Button variant="primary" onClick={handleClose}>
                 Create
               </Button>
             </Modal.Footer>
           </Modal>
         </>
      <Navbar style={{ height: '60px' }} >
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: 'orange' }}>Mentor List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div class="form-group has-search" style={{ marginRight: '20px' }}>
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search" style={{ width: '400px' }} />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
          <Button onClick={handleShow} variant="warning" style={{ padding: '5px 10px', color: 'white' }}><i class="fa-solid fa-plus"></i> &nbsp; New Mentor</Button>
        </Container>
      </Navbar>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th><input type='checkbox' /></th>
            <th>No</th>
            <th>Mentor Name</th>
            <th>Employee ID</th>
            <th>Email ID</th>
            <th>skills</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type='checkbox' /></td>
            <td>01</td>
            <td>Chandan</td>
            <td>#1235646</td>
            <td>abc@info.com</td>
            <td>
              <Stack direction="row" spacing={1}>
                {chips.map((val) => {
                  return <Chip label={val} variant="filled" onDelete={handleDelete}  style={{ background: "#0c99d4" }} />
                })}

              </Stack>
            </td>
            <td><button style={{ border: 'none' }} onClick={ functionOnEditClick}><i class="fa-solid fa-pen"></i></button> &nbsp;  <button style={{ border: 'none' }} onClick={functionOnDeleteClick}><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default AdminMentor