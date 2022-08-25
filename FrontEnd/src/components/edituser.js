import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

export function EditUser(props){

    const param= useParams();
    const baseUrl="http://localhost:8080/user/api/"+param.id;
    const history=useHistory();
    const [user,setUser]=useState({});

    useEffect(()=>{
        const data= axios.get(baseUrl);
        data.then(response=>setUser(response.data))
        .catch(error=>{console.log(error);
            setUser({})
        })
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(baseUrl,user)
        .then(result=>props.history.push('/userList'));
    }
    const inputHandler= (e)=>{
        setUser((user)=>(
            {
                ...user,
                [e.target.name]:e.target.value
        }))
    }

    return (
        <div>
            <button onClick={history.goBack} className="btn btn-info">Go Back</button>
            <h1>Edit User</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form className="form" onSubmit={handleSubmit}>
                        <label>First Name</label>
                            <input type='text' name='fname' id='fname' placeholder="Enter First Name"
                            value={user.fname} className='form-control' onChange={inputHandler}/>
                            <label>Last Name</label>
                            <input type='text' name='lname' id='lname' placeholder="Enter Last Name"
                            value={user.lname} className='form-control' onChange={inputHandler}/>
                            <label>Email</label>
                            <input type='text' name='email' id='email' placeholder="Enter Email"
                            value={user.email} className='form-control' onChange={inputHandler}/>
                            <label>Mobile</label>
                            <input type='text' name='mno' id='mno' placeholder="Enter Country"
                            value={user.mno} className='form-control' onChange={inputHandler}/>
                            <label>Password</label>
                            <input type='password' name='password' id='password' placeholder="Enter Password"
                            value={user.password} className='form-control' onChange={inputHandler}/>

                            <button className="btn btn-primary" type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ) ;
}