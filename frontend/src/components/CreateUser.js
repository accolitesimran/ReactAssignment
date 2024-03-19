import React from "react";
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser=()=>{
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [contactNo,setContactNo]=useState();
    const navigate=useNavigate();

    const Submit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:4000/api/v1/createUser",{name,email,contactNo})
        .then(result=>{
            console.log(result);
            navigate('/');
        }
        )
        .catch(err=>console.log(err));
    }
    return (
        <div className="form-wrapper">
                <form onSubmit={Submit}>
                <h2>ADD USER</h2>
                <div className="cover">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="cover">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your mail" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="cover">
                    <label>Contact number</label>
                    <input type="text" placeholder="Enter your number" onChange={(e)=>setContactNo(e.target.value)}></input>
                </div>
                <div className="cover"><button className="edit">Submit</button></div>
                </form>
        </div>
    )
}
export default CreateUser;