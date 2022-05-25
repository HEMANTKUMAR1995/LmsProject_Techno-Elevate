import React, { useState } from 'react'

function GlobalNavBar() {
 //Global SeARCH Start
    const [globalsearch, setGlobalsearch] = useState([{
     a:"af",
}])

const handleChange = (e) => {
    e.preventDefault();
    setGlobalsearch(e.target.value);
  };
return (
  <div>
        <input type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={globalsearch} />
{/* Global SeARCH Start           */}
</div>
)
}

export default GlobalNavBar