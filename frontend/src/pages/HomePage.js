import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

const HomePage=()=>{
        const [userData,setUserData]=useState();
       
        useEffect(()=>{
            axios.get('http://localhost:4000/api/v1/getUser')
            .then(result=>setUserData(result.data))
            .catch(err=>console.log(err));
        },[]);

        const handleDelete=(id)=>{
            axios.delete('http://localhost:4000/api/v1/deleteUser/'+id)
            .then(res=>{console.log(res)
                window.location.reload()
            })
            .then(err=>console.log(err))
        }

        return (
        <div className="wrapper">
            <div className="main">
                <div className="heading">
                    <h2 className="head1">USERS</h2>
                    <h4 className="head2">List of all the users of this product.</h4>
                </div>
                <div>
                    <Link to={"/createUser"}>
                        <button className="create">
                            Add User
                        </button>
                    </Link>
                </div>
                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            userData?.data.map((user)=>(
                                    <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contactNo}</td>
                                    <td>
                                        <Link to={`/updateUser/${user._id}`}>
                                        <button className="edit">Edit</button>
                                        </Link>
                                        <button className="delete" onClick={(e)=>handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default HomePage;
