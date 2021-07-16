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
          <Route path="/admin/category" component={CategoryComponent} />
          <Route path="/admin/edustatus" component={EduStatusComponent} />
          <Route path="/admin/language" component={LanguageComponent} />
          <Route path="/admin/designation" component={DesignationComponent} />
          <Redirect from="/" to="/test" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
