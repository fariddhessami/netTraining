import React, { Component } from 'react';
import {
  BrowserRouter as Brouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

class MainPage extends Component {
  render() {
    return (
      <div>
        this is main page
        <Brouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Brouter>
      </div>
    );
  }
}

export default MainPage;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
