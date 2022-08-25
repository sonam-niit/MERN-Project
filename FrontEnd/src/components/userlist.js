import axios from "axios";
import React, { useEffect, useState } from "react";

export function UserList(props) {

    const [users, setUsers] = useState([]);
    const url = 'http://localhost:8080/user/api/';

    const getData = () => {
        const mydata = axios.get(url)
        mydata.then(response => { setUsers(response.data); })
            .catch(error => { console.log(error); setUsers([]) })
    }
    const deleteUser = (id) => {
        axios.delete(url + "/" + id)
            .then(res => getData())
    }
    const viewUser = (id) => {
        props.history.push({
            pathname: '/userdetails/' + id
        })
    }
    const editUser = (id) => {
        props.history.push({
            pathname: '/editUser/' + id
        })
    }
    const tabRow = users.map((user, i) => {
        return (
            <tr key={i}>
                <td>{user._id}</td>
                <td>{user.fname}</td>
                <td>{user.email}</td>
                <td>{user.mno}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => { viewUser(user._id) }}>View User</button>
                    <button className="btn btn-info" onClick={() => { editUser(user._id) }}>Edit User</button>
                    <button className="btn btn-primary" onClick={() => { deleteUser(user._id) }}>Delete User</button>
                </td>
            </tr>
        );
    })

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Email</th><th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {tabRow}
                </tbody>
            </table>
        </div>
    );
}