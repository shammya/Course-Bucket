import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from "views/Home";
import Profile from "views/Profile";
import ProfileDetails from 'views/ProfileDetails';
import Auth from './layout/Auth';
import Search from './views/Search';
import CreateCourse from './views/CreateCourse';
import DrawerLayout from './layout/DrawerLayout';

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


          <Route path="/test" component={CreateCourse} />
          {/* <Redirect from="/" to="/home" /> */}
          <Redirect from="/" to="/test" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
