import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Home } from "components/Home";
import Profile from "components/person/Profile";
import Auth from "./layout/Auth";
import { CourseView } from "./components/course/courseView/CoursePage";
import Dashboard from "./components/person/Dashboard";
import MyCourse from "./components/person/MyCourse";
import Search from "./components/search/SearchPage";
import AdminDashboard from "./components/AdminPanel/AdminDashboard";
import { Fade } from "@material-ui/core";
import ProfileDetails from "components/person/ProfileDetails";
import CreateCourse from "components/course/createCourse/CreateCoursePage";

// export const RouteAddress = {
//   home: { route: "/home", child: [] },
//   search: { route: "/search", child: [] },
//   admin: {
//     route: "/admin",
//     child: [
//       { country: { route: "/country" }, child: [] },
//       { language: { route: "/language" }, child: [] },
//     ],
//   },
//   search: "/search",
//   admin: "/admin",
// };

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
