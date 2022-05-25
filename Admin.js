import React, { useState } from 'react'
import GlobalNavBar from './GlobalNavBar'
import Mentor from './Mentor'

function Admin() {
 
    let NavigateToBatchPage = () =>{
        
    }
    let NavigateToMentorPage = () => {
        
    }
    let NavigateToRequestPage = () => {
        
    }
    
  return (
      <div>
          <GlobalNavBar />
          
          <Mentor />
          <button onClick={NavigateToBatchPage}>Batch</button>
          <button onClick={NavigateToMentorPage}>Mentor</button>
          <button onClick={NavigateToRequestPage}>Request</button>
    </div>
  )
}

export default Admin