// import React, { useState } from 'react'
import { useState } from 'react'
import { Container, Navbar, Table } from 'react-bootstrap'


function AdminRequest() {
const [employee, setEmployee] = useState([{
  No:"01",
 EmployeeID:"01012200",
 Yop:"2022",
 Percentage:"80%",
 Experience:"3yrs",
 ContactNo:"8117832556",
},{
  No:"01",
 EmployeeID:"01012200",
 Yop:"2022",
 Percentage:"80%",
 Experience:"3yrs",
 ContactNo:"8117832556",
},{
  No:"01",
 EmployeeID:"01012200",
 Yop:"2022",
 Percentage:"80%",
 Experience:"3yrs",
 ContactNo:"8117832556",
}])

  let functionOnEditClick=()=>{
    alert("You Clicked On Edit Icon.......!")
}
let functionOnDeleteClick=()=>{
    alert("You Clicked On Delete Icon")
}

let renderhead=()=>{
 let tableheadercontent=['','No','Employee ID','Employee Name','YOP','Percentage','Experience','Contact No.','Action']
 return tableheadercontent.map((key,idx)=>{
   return<th key={idx}>{key}</th>
 })
}
let renderBody=()=>{
  return employee && employee.map(({a,No,EmployeeID,EmployeeName,YOP,Percentage,Experience,ContactNo})=>{
    return (
      <tr key={No}>
       {/* <th><input type='checkbox' /></th> */}
     <td><input type='checkbox' /></td> 
        <td>{No}</td>
        <td>{EmployeeID}</td>
        <td>{EmployeeName}</td>
        <td>{YOP}</td>
        <td>{Percentage}</td>
        <td>{Experience}</td>
        <td>{ContactNo}</td>
        <td className='Action'>
        <td><button className='ApproveButton' onClick={functionOnEditClick} >Approve</button> &nbsp;  <button className='Rejectbutton' onClick={functionOnDeleteClick}>Reject</button></td>
        {/* <button onClick={()=> deleteData(No)}>Action</button> */}
        </td>
      </tr>
    )
  })
}
let deleteData=()=>{
 alert("Congratulations") 
}


  return (
    <div>
       <Navbar style={{ height: '60px' }} >
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: 'orange' }}>Request List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div class="form-group has-search" style={{ marginRight: '20px' }}>
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search" style={{ width: '400px' }} />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
          {/* <Button variant="warning" style={{ padding: '5px 10px', color: 'white' }} ><i class="fa-solid fa-plus"></i> &nbsp; New Mentor</Button> */}
        </Container>
      </Navbar>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th><input type='checkbox' /></th>
            <th>No</th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>YOP</th>
            <th>Percentage</th>
            <th>Experince</th>
            <th>Contact No.</th>
            <th>Action</th> */}
            {renderhead()}
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td><input type='checkbox' /></td>
            <td>01</td>
            <td>#1235646</td>
            <td>Aditi</td>
            <td>2022</td>
            <td>90%</td>
            <td>Fresher</td>
            <td>7894561230</td>
            <td><button style={{ border: 'none' }} onClick={functionOnEditClick} ><i class="fa-solid fa-pen"></i></button> &nbsp;  <button style={{ border: 'none' }} onClick={functionOnDeleteClick}><i class="fa-solid fa-trash-can"></i></button></td>
          </tr> */}
          {renderBody()}
        </tbody>
      </Table>
    </div>
  )
}

export default AdminRequest