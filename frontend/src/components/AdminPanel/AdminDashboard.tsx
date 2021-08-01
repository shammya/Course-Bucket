import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { Category, Image, Language, Looks } from "@material-ui/icons";
import DrawerLayout, { IDrawerLayoutObject } from "layout/DrawerLayout";
import { useState } from "react";
import { ImEarth } from "react-icons/im";
import { Redirect, Route, Switch } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { UserRegistrationChart } from "components/AdminPanel/charts/UserRegistrationChart";
import MultiSelectTreeView from "./CategoryComponent";
import CountryComponent from "./CountryComponent";
import DesignationComponent from "./DesignationComponent";
import EduStatusComponent from "./EduStatusComponent";
import LanguageComponent from "./LanguageComponent";
import PopularCategoryChart from "./charts/PopularCategoryChart";
import { PopularCourseAdminChart } from "./charts/PopurlarCourseAdminChart";

function ContentHeader({ children }) {
  return (
    <Card>
      <CardContent>
        <CardActionArea>
          <Grid container direction="row" wrap="nowrap">
            <Grid item>
              <Image />
            </Grid>
            <Grid item container direction="column">
              <Grid item>
                <Typography variant="h5">Course title</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">Course subtitle</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
        {children}
      </CardContent>
    </Card>
  );
}

interface PurchaseHistory {
  image: JSX.Element;
  courseName: string;
  studentImage: JSX.Element;
  studentName: string;
  time: Date;
  amount: number;
}

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
      icon: <Looks />,
      content: (
        <Grid container xs spacing={2}>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent>
                <Typography align="center" variant="h6">
                  Visitors
                </Typography>
                <Typography align="center" variant="h4">
                  170
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent>
                <Typography align="center" variant="h6">
                  New Course
                </Typography>
                <Typography align="center" variant="h4">
                  17
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent>
                <Typography align="center" variant="h6">
                  Total Course
                </Typography>
                <Typography align="center" variant="h4">
                  170
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent>
                <Typography align="center" variant="h6">
                  New User
                </Typography>
                <Typography align="center" variant="h4">
                  2
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent>
                <Typography align="center" variant="h6">
                  Total User
                </Typography>
                <Typography align="center" variant="h4">
                  240
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent>
                <Typography align="center" variant="h6">
                  Today Income
                </Typography>
                <Typography align="center" variant="h4">
                  $345
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent>
                <Typography align="center" variant="h6">
                  Total Income
                </Typography>
                <Typography align="center" variant="h4">
                  $2404
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <PopularCourseAdminChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <PopularCategoryChart />
          </Grid>
          <Grid item xs={12}>
            <UserRegistrationChart />
          </Grid>
        </Grid>
      ),
    },
    {
      label: "Category",
      urlShort: "category",
      icon: <Category />,
      content: <MultiSelectTreeView />,
    },
    {
      label: "Country",
      urlShort: "country",
      icon: <ImEarth />,
      content: <CountryComponent />,
    },
    {
      label: "Language",
      urlShort: "language",
      icon: <Language />,
      content: <LanguageComponent />,
    },
    {
      label: "Designation",
      urlShort: "designation",
      icon: <Language />,
      content: <DesignationComponent />,
    },
    {
      label: "Educational Status",
      urlShort: "educational-status",
      icon: <Language />,
      content: <EduStatusComponent />,
    },
  ];

  const route = useRouteMatch();

  return (
    <>
      <Switch>
        {objects.map((item, idx) => (
          <Route exact path={`${route.path}/${item.urlShort}`}>
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
