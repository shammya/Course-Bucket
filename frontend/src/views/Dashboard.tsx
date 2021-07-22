import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Image, Looks, RateReview } from "@material-ui/icons";
import FAQBox from "components/courseView/FAQ";
import ReviewBox from "components/courseView/Review";
import DrawerLayout, { IDrawerLayoutObject } from "layout/DrawerLayout";
import CustomPagination from "layout/Pagination";
import MaterialTable from "material-table";
import React, { useState } from "react";
import { FaChalkboardTeacher, FaDollarSign, FaQq } from "react-icons/fa";
import IncomePerCourseChart from "./IncomePerCourseChart";
import { OverviewBarChart } from "./Overview";
import PopularCategoryChart from "./PopularCategoryChart";
import { CoursePopularityPieChart } from "./PopularityPieChart";
import { PopularCourseAdminChart } from "./PopurlarCourseAdminChart";
import { RatingLineChart } from "./RatingLIneChart";
import { UserRegistrationChart } from "./UserRegistrationChart";
import { useRouteMatch } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";

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

function Dashboard() {
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
      content: (
        <MaterialTable
          // @ts-ignore
          columns={columns}
          title="Purchase History"
          data={data}
        />
      ),
    },
    {
      label: "Reviews",
      urlShort: "review",
      icon: <RateReview />,
      content: (
        <CustomPagination objectsPerPage={3}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Grid item>
              <ContentHeader>
                <CustomPagination type="two-item-per-line" objectsPerPage={2}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <ReviewBox />
                  ))}
                </CustomPagination>
              </ContentHeader>
            </Grid>
          ))}
        </CustomPagination>
      ),
    },
    {
      label: "FAQ",
      urlShort: "faq",
      icon: <FaQq />,
      content: (
        <CustomPagination objectsPerPage={3}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Grid item>
              <ContentHeader>
                <CustomPagination type="one-item-per-line" objectsPerPage={2}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <FAQBox />
                  ))}
                </CustomPagination>
              </ContentHeader>
            </Grid>
          ))}
        </CustomPagination>
      ),
    },
    {
      label: "Student List",
      urlShort: "enrolled-student",
      icon: <FaChalkboardTeacher />,
      content: (
        <CustomPagination objectsPerPage={3}>
          {[1, 2, 3, 4, 5].map((item) => (
            <ContentHeader>
              <CustomPagination type="calculate-by-width">
                {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 1, 1].map(
                  (item) => (
                    <Card>
                      <CardActionArea>
                        <CardMedia>
                          <Image />
                        </CardMedia>
                        <CardContent>
                          <Grid container direction="column">
                            <Grid item>
                              <Typography variant="h6">Student Name</Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="body2">
                                Enrolled Date
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  )
                )}
              </CustomPagination>
            </ContentHeader>
          ))}
        </CustomPagination>
      ),
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
