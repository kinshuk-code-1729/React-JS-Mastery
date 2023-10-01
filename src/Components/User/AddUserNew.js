import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUserNew = () => {
    
    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [website,setWebsite] = useState("");
    
    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeUsername = e => {
        setUsername(e.target.value);
    }
    const onChangeEmail = e => {
        setEmail(e.target.value);
    }
    const onChangePhone = e => {
        setPhone(e.target.value);
    }
    const onChangeWebsite = e => {
        setWebsite(e.target.value);
    }

    const onFormSubmit = async(event)=>{
        event.preventDefault();
        if(!name){
            alert("Name cannot be empty");
            return;
        }
        if(!username){
            alert("Username cannot be empty");
            return;
        }
        if(!email){
            alert("Email Address cannot be empty");
            return;
        }
        if(!phone){
            alert("Phone Number cannot be empty");
            return;
        }
        if(!website){
            alert("Website URL cannot be empty");
            return;
        }

        const user = { name: name, username: username, email: email, phone: phone, website: website };
        await axios.post("http://localhost:5000/users",user);
        navigate({ pathname: '/'});
    }

  return (
    <div className="container">
        <div className="w-75 mx-auto p-5 shadow">
            <h2 className="text-center mb-4">Add User Here....</h2>
            <div>
                <div className="form-group mb-2">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Full Name"
                        name="name"
                        value={name}
                        onChange={(event) => onChangeName(event)}
                    />
                </div>
                <div className="form-group mb-2">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Username"
                        name="username"
                        value={username}
                        onChange={(event)=>onChangeUsername(event)}
                    />
                </div>
                <div className="form-group mb-2">
                    <input type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email Address"
                        name="email"
                        value={email}
                        onChange={(event)=>onChangeEmail(event)}
                    />
                </div>
                <div className="form-group mb-2">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Phone Number"
                        name="phone"
                        value={phone}
                        onChange={(event)=>onChangePhone(event)}
                    />
                </div>
                <div className="form-group mb-4">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Website"
                        name="website"
                        value={website}
                        onChange={(event)=>onChangeWebsite(event)}
                    />
                </div>
                <button onClick={(event)=>onFormSubmit(event)} className="btn btn-info text-white col-12">Add User</button>
            </div>
        </div>
    </div>
  )
}

export default AddUserNew