import { Grid, CardContent, Typography } from "@material-ui/core";
import axios from "axios";
import { authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure";
import input from "postcss/lib/input";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import PopularCategoryChart from "./charts/PopularCategoryChart";
import { PopularCourseAdminChart } from "./charts/PopurlarCourseAdminChart";
import { UserRegistrationChart } from "./charts/UserRegistrationChart";

interface ShowCard {
  totalVisitor: number;
  newCourse: number;
  totalCourse: number;
  newUser: number;
  totalUser: number;
  todayIncome: number;
  totalIncome: number;
}

export function Cards() {
  const [data, setData] = useState<ShowCard>();
  useEffect(() => {
    axios
      .get(GLOBAL.HOST + "/get-show-card-admin", authHeaders())
      .then((response) => {
        setData(response.data);
      });
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={3}>
        <Card>
          <CardContent>
            <Typography align="center" variant="h6">
              Visitors
            </Typography>
            <Typography align="center" variant="h4">
              {data?.totalVisitor}
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
              {data?.newCourse}
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
              {data?.totalCourse}
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
              {data?.newUser}
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
              {data?.totalUser}
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
              ${data?.todayIncome}
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
              ${data?.todayIncome}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
