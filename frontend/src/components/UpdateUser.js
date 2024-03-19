import React from "react";
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams ,useNavigate} from "react-router-dom";
const UpdateUser=()=>{
    const {id}=useParams();
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [contactNo,setContactNo]=useState();
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4000/api/v1/getUser/'+id)
        .then(result=>{console.log(result.data)
            setName(result.data.data.name)
            setEmail(result.data.data.email)
            setContactNo(result.data.data.contactNo)
        })
        .catch(err=>console.log(err));
    },[]);
    const submit=async(e)=>{
        e.preventDefault();
        await axios.put("http://localhost:4000/api/v1/updateUser/"+id,{name,email,contactNo})
        .then(result=>{
            console.log(result);
            navigate('/');
        }
        )
        .catch(err=>console.log(err));
    }
    return (
        <div className="form-wrapper">
            <form onSubmit={submit}>
            <div>
                <h2>UPDATE USER</h2>
                <div className="cover">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="cover">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your mail" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="cover">
                    <label>Contact number</label>
                    <input type="text" placeholder="Enter your number" value={contactNo} onChange={(e)=>setContactNo(e.target.value)}></input>
                </div>
                <div className="cover"><button className="edit">Update</button></div>
                
            </div>
            </form>
        </div>
    )
}
export default UpdateUser;