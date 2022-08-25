import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { AddUser } from './components/adduser';
import { UserList } from './components/userlist';
import { EditUser } from './components/edituser';
import { UserDetails } from './components/userdetails';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div className='container'>
            <nav className='btn btn-warning navbar navbar-expand-lg navheader'>
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <Link to="createUser" className='nav-link'>Add User</Link>
                    </li>
                    <li className='nav-item'>
                      <Link to="userList" className='nav-link'>UserList</Link>
                    </li>
                </ul>
              </div>
            </nav>
            <Switch>
              <Route exact path="/createUser" component={AddUser}></Route>
              <Route exact path="/userList" component={UserList}></Route>
              <Route exact path="/editUser/:id" component={EditUser}></Route>
              <Route exact path="/userdetails/:id" component={UserDetails}></Route>
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
