import React, { useState } from "react";
import { Button, Container, Navbar, Table } from "react-bootstrap";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// import './AdminBatch.css'

function AdminTable() {
  const [chips, setchips] = useState(["react", "java", "python"]);
  const handleDelete = () => {
 alert("You Clicked On Remove Button........!")
  };
  let functionOnEditClick=()=>{
      alert("You Clicked On Edit Icon.......!")
  }
  let functionOnDeleteClick=()=>{
      alert("You Clicked On Delete Icon")
  }
  return (
    <div>
      <Navbar style={{ height: "60px" }}>
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: "orange" }}>
            Batch List
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div
                class="form-group has-search"
                style={{ marginRight: "20px" }}
              >
                <span class="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  style={{ width: "400px" }}
                />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
          <Button
            variant="warning"
            style={{ padding: "5px 10px", color: "#f4f5f8" }}
          >
            {" "}
            <i class="fa-solid fa-plus"></i> &nbsp; New Batch
          </Button>
        </Container>
      </Navbar>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>No</th>
            <th>Batch Id</th>
            <th>Batch Name</th>
            <th>Mentor Name</th>
            <th>Technologies</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: "#ffffff" }}>
            <td>
              <input type="checkbox" />
            </td>
            <td>01</td>
            <td>#TySS02022De</td>
            <td>Uplift2022</td>
            <td>Deepti</td>
            <td>
              <Stack direction="column" spacing={0}>
                {chips.map((val) => {
                  return (
                    <Chip
                      label={val}
                      variant="outlined"
                      onDelete={handleDelete}
                      style={{ background: "#0c99d4" }}
                    />
                  );
                })}
              </Stack>
            </td>
            <td>28 Mar 2022</td>
            <td>..............</td>
            <td>
              <select name="status" id="cars">
                <option value="inProgress">InProgress</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </td>
            <td>
              <button style={{ border: "none" }} onClick={functionOnEditClick}>
                <i class="fa-solid fa-pen"></i>
              </button>{" "}
              &nbsp;{" "}
              <button style={{ border: "none" }}  onClick={functionOnDeleteClick}>
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminTable;
