import { Button } from "bootstrap";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

function SignUpPrimary() {
  const [primaryInfo, setprimaryInfo] = useState({
    employeeId: "",
    employeeName: "",
    dateOfJoining: "",
    dateOfBith: "",
    emailId: "",
    bloodgroup: "",
    designation: "",
    gender: "",
    nationality: "",
    employeeStatus: "",
  });

  let updateData = (e) => {
    setprimaryInfo({
      ...primaryInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              name="employeeId"
              value={primaryInfo.employeeId}
              onChange={updateData}
            />
          </Col>
          <Col>
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              name="employeeName"
              value={primaryInfo.employeeName}
              onChange={updateData}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Date of Joining</Form.Label>
            <Form.Control
              type="date"
              name="dateOfJoining"
              value={primaryInfo.dateOfJoining}
              onChange={updateData}
            />
          </Col>
          <Col>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dateOfBith"
              value={primaryInfo.dateOfBith}
              onChange={updateData}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              name="emailId"
              value={primaryInfo.emailId}
              onChange={updateData}
            />
          </Col>
          <Col>
            <Form.Label>Blood Group</Form.Label>
            <Form.Control
              name="bloodgroup"
              value={primaryInfo.bloodgroup}
              onChange={updateData}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Designation</Form.Label>
            <Form.Control
              name="designation"
              value={primaryInfo.designation}
              onChange={updateData}
            />
          </Col>
          <Col>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              name="gender"
              value={primaryInfo.gender}
              onChange={updateData}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Nationality</Form.Label>
            <Form.Control
              name="nationality"
              value={primaryInfo.nationality}
              onChange={updateData}
            />
          </Col>
          <Col>
            <Form.Label>Employee Status</Form.Label>
            <Form.Control
              name="employeeStatus"
              value={primaryInfo.employeeStatus}
              onChange={updateData}
            />
          </Col>
        </Row>

        {/* <Button  type="submit">
                  Previous
                </Button>
                <Button type="submit">
                    Next
                </Button> */}
      </Form>
    </div>
  );
}

export default SignUpPrimary;

// <label> Employee ID </label>
//         <input type="text" name='employeeId' value={primaryInfo.employeeId} onChange={updateData}/>
//         <label> Employee Name </label>
//         <input type="text" name='employeeId' value={primaryInfo.employeeName} onChange={updateData}/>
//         <label> Date of Joining </label>
//         <input type="date" name='employeeId' value={primaryInfo.dateOfJoining} onChange={updateData}/>
//         <label> Date of Birth </label>
//         <input type="text" name='employeeId' value={primaryInfo.dateOfBith} onChange={updateData}/>
//         <label> Employee ID </label>
//         <input type="text" name='employeeId' onChange={updateData}/>
//         <label> Employee ID </label>
//         <input type="text" name='employeeId' onChange={updateData}/>
