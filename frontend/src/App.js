import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { SignIn } from 'views/auth/SignIn';
import { SignUp } from 'views/auth/SignUp';
import { Home } from "views/Home";
import Profile from "views/Profile";
import ProfileDetails from 'views/ProfileDetails';
import CountryComponent from './components/AdminPanel/CountryComponent.js';
import Auth from './layout/Auth';
import CreateCourse from './views/CreateCourse';
import Search from './views/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route path="/profile-details" component={ProfileDetails} />
          <Route path="/create-course" component={CreateCourse} />

          <Route path="/admin/country" component={CountryComponent} />
          <Route path="/test" component={Auth} />
          <Redirect from="/" to="/test" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
