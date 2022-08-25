import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';

export function UserDetails(){

    const [user,setUser]=useState({});
    const param= useParams();
    const history=useHistory();
    const baseUrl="http://localhost:8080/user/api/"+param.id;

    useEffect(()=>{
        const data= axios.get(baseUrl);
        data.then(response=>setUser(response.data))
        .catch(error=>{console.log(error);
            setUser({})
        })
    },[]);

    return (
        <div>
            <button className="btn btn-info" onClick={history.goBack}>Go Back</button>
            <h1>User Details</h1>
            <ul className="list-group">
                <li className="list-group-item">Name: {user.fname}</li>
                <li className="list-group-item">Name: {user.lname}</li>
                <li className="list-group-item">Name: {user.email}</li>
                <li className="list-group-item">Name: {user.mno}</li>

            </ul>
        </div>
    ) ;
}