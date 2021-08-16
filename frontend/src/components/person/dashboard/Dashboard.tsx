import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { Looks, RateReview } from "@material-ui/icons";
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

export function ContentHeader({
  courseId,
  courseTitle,
  courseSubtitle,
  courseImage,
  children,
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
      <CardContent>{children}</CardContent>
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
  const objects: Array<IDrawerLayoutObject> = [
    {
      label: "Overview",
      urlShort: "overview",
      icon: <Looks />,
      content: (
        <Grid container xs spacing={2}>
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
    },
    {
      label: "Purchase History",
      urlShort: "purchase-history",
      icon: <FaDollarSign />,
      content: <PurchaseHistoryListView />,
    },
    {
      label: "Reviews",
      urlShort: "review",
      icon: <RateReview />,
      content: <ReviewListView />,
    },
    {
      label: "FAQ",
      urlShort: "faq",
      icon: <FaQq />,
      content: <FaqView />,
    },
    {
      label: "Student List",
      urlShort: "enrolled-student",
      icon: <FaChalkboardTeacher />,
      content: <EnrolledStudentListView />,
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

export default Dashboard;
