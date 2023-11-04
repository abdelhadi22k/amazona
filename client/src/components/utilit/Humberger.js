import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Humberger = () => {

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
   
  
  return (
    <div>
        <Button variant="dark" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
          <i className="fas fa-bars"></i>
        </Button>
    </div>
  )
}

export default Humberger
