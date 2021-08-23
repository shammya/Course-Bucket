import { Grid } from "@material-ui/core";
import { Category, Image, Language, Looks } from "@material-ui/icons";
import { UserRegistrationChart } from "components/AdminPanel/charts/UserRegistrationChart";
import DrawerLayout, { IDrawerLayoutObject } from "layout/DrawerLayout";
import { useState } from "react";
import { ImEarth } from "react-icons/im";
import { Redirect, Route, Switch } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { Cards } from "./Cards";
import MultiSelectTreeView from "./CategoryComponent";
import PopularCategoryChart from "./charts/PopularCategoryChart";
import { PopularCourseAdminChart } from "./charts/PopurlarCourseAdminChart";
import CountryComponent from "./CountryComponent";
import CourseApprovalComponent from "./CourseApprovalComponent";
import DesignationComponent from "./DesignationComponent";
import EduStatusComponent from "./EduStatusComponent";
import LanguageComponent from "./LanguageComponent";
import SliderComponent from "./SliderComponent";
import StudentInfoComponent from "./StudentInfoComponent";
import TeacherInfoComponent from "./TeacherInfoComponent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#282C34",
    flexGrow: 1,
    padding: 5,
    "& > *": {
      color: "white",
    },
    "& input": {
      color: "white",
    },
    "& fieldset": {
      border: "2px solid white",
    },
    "& fieldset:focus": {
      border: "2px solid gray",
    },
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    display: "block-inline",
    textAlign: "center",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      padding: 0,
    },
    color: "inherit",
  },
  input: {
    flexGrow: 1,
  },
  inputRoot: {
    flexGrow: 1,
    color: "inherit",
    borderRadius: "35px",
    padding: theme.spacing(0, 2, 0, 3),
    margin: theme.spacing(0, 3),
  },
}));

function AdminDashboard() {
  const [columns, setColumns] = useState([
    { title: "Course Image", field: "image" },
    { title: "Course Name", field: "courseName" },
    { title: "Student Image", field: "studentImage" },
    { title: "Student Name", field: "studentName" },
    { title: "Purchase time", field: "time" },
    { title: "Purchase Amount", field: "amount" },
    // { title: "Course Image", field: "image", editable: "never" },
    // { title: "Course Name", field: "courseName", editable: "never" },
    // { title: "Student Image", field: "studentImage", editable: "never" },
    // { title: "Student Name", field: "studentName", editable: "never" },
    // { title: "Purchase time", field: "time", editable: "never" },
    // { title: "Purchase Amount", field: "amount", editable: "never" },
  ]);
  const classes = useStyles();
  const [data, setData] = useState([
    {
      image: <Image />,
      courseName: "Course Name Course Name Course Name Course Name Course Name",
      studentImage: <Image />,
      studentName: "StudentName",
      time: new Date().toDateString(),
      amount: 3000,
    },
  ]);
  const objects: Array<IDrawerLayoutObject> = [
    {
      label: "Overview",
      urlShort: "overview",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/overview.png").default}
        />
      ),
      content: (
        <Grid container spacing={2}>
          <Grid item>
            <Cards />
          </Grid>
          <Grid item xs={12}>
            <UserRegistrationChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <PopularCourseAdminChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <PopularCategoryChart />
          </Grid>
        </Grid>
      ),
    },
    {
      label: "Homepage Slider",
      urlShort: "slider-manager",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/list.png").default}
        />
      ),
      content: <SliderComponent />,
    },
    {
      label: "Student Info",
      urlShort: "student-info",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/student.png").default}
        />
      ),
      content: <StudentInfoComponent />,
    },
    {
      label: "Teacher Info",
      urlShort: "teacher-info",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/teacher.png").default}
        />
      ),
      content: <TeacherInfoComponent />,
    },
    {
      label: "Course Approval",
      urlShort: "course-approval",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/course.png").default}
        />
      ),
      content: <CourseApprovalComponent />,
    },
    {
      label: "Category",
      urlShort: "category",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/root.png").default}
        />
      ),
      content: <MultiSelectTreeView />,
    },
    {
      label: "Country",
      urlShort: "country",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/country.png").default}
        />
      ),
      content: <CountryComponent />,
    },
    {
      label: "Language",
      urlShort: "language",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/language.png").default}
        />
      ),
      content: <LanguageComponent />,
    },
    {
      label: "Designation",
      urlShort: "designation",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/designation.png").default}
        />
      ),
      content: <DesignationComponent />,
    },
    {
      label: "Educational Status",
      urlShort: "educational-status",
      icon: (
        <img
          className={classes.logo}
          src={require("assets/img/edustatus.png").default}
        />
      ),
      content: <EduStatusComponent />,
    },
  ];

  const route = useRouteMatch();

  return (
    <>
      <Switch>
        {objects.map((item, idx) => (
          <Route key={idx} exact path={`${route.path}/${item.urlShort}`}>
            <DrawerLayout objects={objects} defaultTabIndex={idx} />
          </Route>
        ))}
        <Route path={`${route.path}/**`}>
          <Redirect to={`${route.path}`} />
        </Route>
        <Route path={`${route.path}`}>
          <DrawerLayout objects={objects} defaultTabIndex={0} />
        </Route>
      </Switch>
    </>
  );
}

export default AdminDashboard;
