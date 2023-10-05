import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const ViewUser = () => {

  const { userId } =useParams();
  const initialState = { name: "", username: "", email: "", phone: "",website: ""};
  const [user,setUser] = useState(initialState)
  const [address, setAddress] = useState({})
  const [company, setCompany] = useState({})

  useEffect(() => {
    fetchUser();
  }, []);
  
  const fetchUser = async () => {
      const response = await axios.get(`http://localhost:5000/users/${userId}`);
      // console.log(response);
      setUser(response.data);
      setAddress(response.data.address);
      setCompany(response.data.company);
  }

  return (
    <div className="container">
      <Link to="/" className="btn btn-outline-info mt-2">Back</Link>
      <p className="display-2">User Id : {user.id}</p>
      <ListGroup variant="flush" className="p-4 w-75">
      <ListGroup.Item><b>Name : </b>{user.name}</ListGroup.Item>
      <ListGroup.Item><b>Username : </b>{user.username}</ListGroup.Item>
      <ListGroup.Item><b>Email : </b>{user.email}</ListGroup.Item>
      <ListGroup.Item><b>Phone : </b>{user.phone}</ListGroup.Item>
      <ListGroup.Item><b>Website : </b>{user.website}</ListGroup.Item>
      <ListGroup.Item><b>Address : </b>{address.street} | {address.city}</ListGroup.Item>
      <ListGroup.Item><b>Company Name : </b>{company.name}</ListGroup.Item>
    </ListGroup>
    </div>
  )
}

export default ViewUser