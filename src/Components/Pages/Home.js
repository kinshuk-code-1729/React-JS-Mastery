import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

/* function Home() {
  return (
    <div>Home</div>
  )
} */

const Home = () =>{

    const [users, setUsers] = useState([]); // Creating users array & Setter Method and array would be empty [] by default
    
    // Called on load of the component only once because dependancy array is empty
    useEffect(()=>{
      // getAllUsers();
      getAllUsersWithAwait();
    }, []);
    
    const getAllUsersWithAwait = async ()=> {
      const result = await axios.get("http://localhost:5000/users");
      console.log(result);
      setUsers(result.data);
      // setUsers(result.data.reverse());
      console.log("After axios call");
    }

    const deleteUser = async (userId) => {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      getAllUsersWithAwait();
    }

    const getAllUsers = ()=>{

      axios.get("http://localhost:5000/users")
      .then(function(response){
        console.log(response.data);
        setUsers(response.data);
      }) // On successfull data fetch from API do something
      .catch(function(error){
        console.log(error);
      }); // If error occured while fetching data from API 

      console.log("After axios API call");
    }

    return(
        <div className="container">
            <h2 className="py-3">User Management System</h2>
            
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <Link to={`/Users/View/${user.id}`} className="btn btn-info me-2">View</Link>
                        <Link to={`/Users/Edit/${user.id}`} className="btn btn-outline-info me-2">Edit</Link>
                        <Button onClick={() => deleteUser(user.id)} variant="danger">Delete</Button>
                      </td>
                    </tr>
                  ))
                  /*
                  users.map((user, index) => {
                    return <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                    </tr>
                  })
                  */
                }
              </tbody>
            </Table>
        </div>
    )
}

export default Home