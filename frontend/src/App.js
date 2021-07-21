import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from "views/Home";
import Profile from "views/Profile";
import ProfileDetails from 'views/ProfileDetails';
import CategoryComponent from '../src/components/AdminPanel/CategoryComponent.js';
import DesignationComponent from '../src/components/AdminPanel/DesignationComponent.js';
import EduStatusComponent from '../src/components/AdminPanel/EduStatusComponent.js';
import LanguageComponent from '../src/components/AdminPanel/LanguageComponent.js';
import CountryComponent from './components/AdminPanel/CountryComponent.js';
import Auth from './layout/Auth';
import { CourseView } from './views/Course';
import CreateCourse from './views/CreateCourse';
import Dashboard from './views/Dashboard';
import MyCourse from './views/MyCourse';
import Search from './views/Search';
import AdminDashboard from './components/AdminPanel/AdminDashboard';
import { Fade } from '@material-ui/core';

export const RouteAddress = {
  home: { route: '/home', child: [] },
  search: { route: '/search', child: [] },
  admin: {
    route: '/admin',
    child: [
      { country: { route: '/country' }, child: [] },
      { language: { route: '/language' }, child: [] },
    ]
  },
  search: '/search',
  admin: '/admin',
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fade>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/profile" component={Profile} />
            <Route path="/profile-details" component={ProfileDetails} />
            <Route path="/create-course" component={CreateCourse} />
            <Route path="/course" component={CourseView} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/my-course" component={MyCourse} />

            {/* <Route path="/admin/country" component={CountryComponent} />
          <Route path="/admin/category" component={CategoryComponent} />
          <Route path="/admin/edustatus" component={EduStatusComponent} />
          <Route path="/admin/language" component={LanguageComponent} />
          <Route path="/admin/designation" component={DesignationComponent} /> */}
            {/* <Route path="/admin" component={AdminDashboard} /> */}
            <Route path="/admin" component={AdminDashboard} />

            <Route path="/test" component={Dashboard} />
            <Redirect from="/" to="/test" />
          </Switch>
        </Fade>
      </BrowserRouter>
    </div>
  );
}

export default App;
