import AdminDashboard from "components/AdminPanel/AdminDashboard";
import CategoryCourse from "components/course/CategoryCourse";
import { CourseView } from "components/course/courseView/CoursePage";
import CreateCourse from "components/course/createCourse/CreateCoursePage";
import { Home } from "components/Home";
import { Messenger } from "components/messenger/Messenger";
import Dashboard from "components/person/dashboard/Dashboard";
import MyCourse from "components/person/MyCourse";
import Profile from "components/person/Profile";
import ProfileDetails from "components/person/ProfileDetails";
import Search from "components/search/SearchPage";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import Auth from "layout/Auth";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

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
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/profile-details" component={ProfileDetails} />
        <Route path="/create-course" exact component={CreateCourse} />
        <Route path="/create-course/:courseId" component={CreateCourse} />
        <Route path="/course/:courseId" component={CourseView} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/my-course" component={MyCourse} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/category/:categoryId" component={CategoryCourse} />
        <Route path="/message" exact component={Messenger} />
        <Route path="/message/:username" component={Messenger} />

        {/* <Route path="/file-upload" component={FileUploader} /> */}
        <Route path="/test" component={Auth} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
