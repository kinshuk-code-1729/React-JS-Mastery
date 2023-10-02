import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewUser = () => {

  const { userId } =useParams();
  const initialState = { name: "", username: "", email: "", phone: "",website: ""};
  const [user,setUser] = useState(initialState)

  useEffect(() => {
    fetchUser();
  }, []);
  
  const fetchUser = async () => {
      const response = await axios.get(`http://localhost:5000/users/${userId}`);
      // console.log(response);
      setUser(response.data);
  }

  return (
    <div>ViewUser</div>
  )
}

export default ViewUser