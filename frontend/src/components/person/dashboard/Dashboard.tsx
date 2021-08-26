import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Looks, RateReview } from "@material-ui/icons";
import AuthService from "components/auth/api/AuthService";
import DrawerLayout, { IDrawerLayoutObject } from "layout/DrawerLayout";
import React from "react";
import { FaChalkboardTeacher, FaDollarSign, FaQq } from "react-icons/fa";
import { Redirect, Route, Switch, useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import IncomePerCourseChart from "../teacher/IncomePerCourseChart";
import { OverviewBarChart } from "../teacher/Overview";
import { CoursePopularityPieChart } from "../teacher/PopularityPieChart";
import { RatingLineChart } from "../teacher/RatingLIneChart";
import { EnrolledStudentListView } from "./EnrolledStudentListView";
import { FaqView } from "./FAQview";
import { PurchaseHistoryListView } from "./PurchaseHistoryLIstView";
import { ReviewListView } from "./ReviewListView";

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

export function ContentHeader({
  courseId,
  courseTitle,
  courseSubtitle,
  courseImage,
  children,
  contentPadding = true,
}) {
  const history = useHistory();
  return (
    <Card style={{ width: "100%" }}>
      <CardActionArea onClick={() => history.push(`/course/${courseId}`)}>
        <Grid container direction="row" wrap="nowrap" spacing={2}>
          <Grid item>
            <img src={courseImage} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            spacing={1}
            style={{ paddingRight: 20 }}
          >
            <Grid item>
              <Typography variant="h5">{courseTitle}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">{courseSubtitle}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </CardActionArea>
      <CardContent style={{ padding: !contentPadding ? 0 : "" }}>
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

function Dashboard() {
  const classes = useStyles();
  const Overview = {
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
        <Grid item xs={12}>
          <OverviewBarChart />
        </Grid>
        <Grid item xs={12}>
          <RatingLineChart />
        </Grid>
        <Grid item md={6} xs={12}>
          <CoursePopularityPieChart />
        </Grid>
        <Grid item md={6} xs={12}>
          <IncomePerCourseChart />
        </Grid>
      </Grid>
    ),
  };
  const PurchaseHistory = {
    label: "Purchase History",
    urlShort: "purchase-history",
    icon: (
      <img
        className={classes.logo}
        src={require("assets/img/purchase.png").default}
      />
    ),
    content: <PurchaseHistoryListView />,
  };
  const Review = {
    label: "Reviews",
    urlShort: "review",
    icon: (
      <img
        className={classes.logo}
        src={require("assets/img/review.png").default}
      />
    ),
    content: <ReviewListView />,
  };
  const FAQ = {
    label: "FAQ",
    urlShort: "faq",
    icon: (
      <img
        className={classes.logo}
        src={require("assets/img/faq.png").default}
      />
    ),
    content: <FaqView />,
  };
  const StudentList = {
    label: "Enrolled Students",
    urlShort: "enrolled-student",
    icon: (
      <img
        className={classes.logo}
        src={require("assets/img/student.png").default}
      />
    ),
    content: <EnrolledStudentListView />,
  };
  const StudentObject: Array<IDrawerLayoutObject> = [
    Review,
    FAQ,
    PurchaseHistory,
  ];
  const TeacherObject: Array<IDrawerLayoutObject> = [
    Overview,
    PurchaseHistory,
    Review,
    FAQ,
    StudentList,
  ];
  const objects =
    AuthService.getCurrentAccountType() === "Teacher"
      ? TeacherObject
      : StudentObject;
  const route = useRouteMatch();
  return (
    <>
      <Switch>
        {objects.map((item, idx) => (
          <Route
            exact
            path={`${route.path}/${item.urlShort}`}
            key={item.urlShort}
          >
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

export default Dashboard;
