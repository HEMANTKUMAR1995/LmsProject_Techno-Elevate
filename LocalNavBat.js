import React, { useState } from 'react'

function LocalNavBat() {
    const [search, setsearch] = useState("");

    let searchText = () =>{
        setsearch( )
    }
  return (
      <div>
          <p> list</p>
          <input 
              type="text"
              placeholder='Search'
              name="search"
              onChange={searchText}
          />
          {/* <NewBatch /> */}
      </div>
  )
}

export default LocalNavBat  