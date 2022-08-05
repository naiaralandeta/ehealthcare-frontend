//import React from 'react';
import { useLocation } from 'react-router-dom'

function adminPage() {

  const location = useLocation;

  return (

    <div className="auth-wrapper" >
      <div className="auth-inner">
        <>{location.state}</>

        <h3>Medicines</h3>
        <h3>Report</h3>
        <h3>Something</h3>

      </div>
    </div>

  )
}

export default adminPage;