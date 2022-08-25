import React, { useState } from "react";
import axios from "axios";

export function AddUser(props){

    const [user,setUser]=useState({fname:'',lname:'',email:'',mno:'',password:'',});

    const inputHandler= (e)=>{
        setUser((user)=>(
            {
                ...user,
                [e.target.name]:e.target.value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/user/api/",user)
        .then(resp=>props.history.push('/userList'))
        .catch(error=>console.log("error occured",error))
    }

    return (
        <div>
            <h1>Add User</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form className="form" onSubmit={handleSubmit}>
                            <label>First Name</label>
                            <input type='text' name='fname' id='fname' placeholder="Enter First Name"
                            value={user.fname||''} className='form-control' onChange={inputHandler}/>
                            <label>Last Name</label>
                            <input type='text' name='lname' id='lname' placeholder="Enter Last Name"
                            value={user.lname||''} className='form-control' onChange={inputHandler}/>
                            <label>Email</label>
                            <input type='text' name='email' id='email' placeholder="Enter Email"
                            value={user.email||''} className='form-control' onChange={inputHandler}/>
                            <label>Mobile</label>
                            <input type='text' name='mno' id='mno' placeholder="Enter Country"
                            value={user.mno||''} className='form-control' onChange={inputHandler}/>
                            <label>Password</label>
                            <input type='password' name='password' id='password' placeholder="Enter Password"
                            value={user.password||''} className='form-control' onChange={inputHandler}/>

                            <button className="btn btn-primary" type="submit">Add User Details</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ) ;
}