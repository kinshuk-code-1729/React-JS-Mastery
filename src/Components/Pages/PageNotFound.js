import React from 'react'
import { Button } from 'react-bootstrap'
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="hide-navbar">
      <h1 className="p-4">The Page you are looking for doesn't exists !!!!!!!!!</h1>
      {/* <button type="button" className="btn btn-primary">Normal Bootstrap</button> */}
      <Button className="m-2" variant="success" href="/">Go back to Home</Button>
      {/* <a href="/">Go back to Home Page</a> */}
    </div>
  )
}

export default PageNotFound