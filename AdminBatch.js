import React, { useState } from "react";
import "./AdminBatch.css";
import { Breadcrumb, Button, Container, Form, Modal, Navbar, Row } from "react-bootstrap";
// import { Layout } from 'antd'
// import AdminTable from './AdminTable';
import { Link, Route, Routes } from "react-router-dom";
import AdminMentor from "./AdminMentor";
import AdminRequest from "./AdminRequest";
import AdminTable from "./AdminTable";

// const { Sider, Content,Header } = Layout;

function AdminBatch() {
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
               <Modal.Title>Add New batch </Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <Form>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Batch Name</Form.Label>
                   <Form.Control
                     type="text"
                     autoFocus
                   />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Mentor Name</Form.Label>
                   <Form.Control
                     type="text"
                     autoFocus
                   />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Technologies</Form.Label>
                   <Form.Control
                     type="text"
                     placeholder="Note:Technologies should be dropdown With a button"
                     autoFocus
                   />
                 </Form.Group>
                 <Form.Select
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                aria-label="Default select example"
                name="AccountType"
                // value={bankdata.AccountType}
                // onChange={getBankData}
              >
                <option></option>
                <option value="1">Savings</option>
                <option value="2">Current</option>
                <option value="3">Salary</option>
              </Form.Select>
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
      <Navbar className="navBar">
        <Container fluid>
          <Navbar.Brand className="justify-content-start">
            <img
              src={require("./../Assests/logob.png")}
              style={{ width: "150px" }}
              alt="Techno Elevate"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Text className="justify-content-center">
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                style={{ width: "500px" }}
              />
            </div>
          </Navbar.Text>
          <Navbar.Text className="jsutify-content-end">
            <Button variant="outline-primary" style={{ padding: "5px 25px" }}>
              Logout
            </Button>
          </Navbar.Text>
        </Container>
      </Navbar>

      <Row>
        <div
          className="col-lg-1 col-sm-1 col-md-1"
          style={{
            width: "80px",
            height: "95vh",
            boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
          }}
        >
          <br />
          <Link to="/">
            <Button
              variant="light"
              className="BatchIcon"
              // style={{ border:"blue" }}
            >
              <img
                style={{ width: "25px" }}
                src={require("./../Assests/Batch.png")}
                alt=""
              />
            </Button>
          </Link>
          <br /> <hr style={{ width: "68px" }} />
          <Link to="/Admin/Mentor">
            <Button
              variant="light"
              className="MentorIcon"
              // style={{ backgroundColor: "none" }}
            >
              <img
                style={{ width: "25px" }}
                src={require("./../Assests/team (3).png")}
                alt=""
              />
            </Button>
          </Link>
          <br />
          <hr style={{ width: "68px" }} />
          <Link to="/Admin/Request">
            <Button
              variant="light"
              className="RequestIcon"
              // style={{ backgroundColor: "none" }}
            >
              <img
                style={{ width: "25px" }}
                src={require("./../Assests/Request.png")}
                alt=""
              />
            </Button>
          </Link>
        </div>
        {/* <div className='col-lg-1 col-md-1 col-sm-1' style={{width:'5px'}} ></div> */}
        <Breadcrumb
          style={{
            position: "absolute",
            top: "85px",
            left: "65px",
            fontSize: "12px",
          }}
        >
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/Admin/Mentor">Mentor</Breadcrumb.Item>
          <Breadcrumb.Item href="/Admin/Request">Employee</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            marginTop: "40px",
            width: "90%",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            marginLeft: "20px",
            overflow: "hidden",
          }}
          className="col-lg-8 col-md-6 col-sm-6 col-xs-6"
        >
          <Routes>
            <Route path="/" element={<AdminTable />} />
            <Route path="/Admin/Mentor" element={<AdminMentor />} />
            <Route path="/Admin/Request" element={<AdminRequest />} />
          </Routes>{" "}
        </div>
      </Row>
    </div>
  );
}

export default AdminBatch;
