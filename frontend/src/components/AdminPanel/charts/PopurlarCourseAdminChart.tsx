import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import { authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";
import { Series } from "devextreme-react/chart";
import PieChart, {
  Connector,
  Export,
  Font,
  Label,
  Legend,
  Tooltip,
} from "devextreme-react/pie-chart";
import React, { useEffect, useState } from "react";

export function PopularCourseAdminChart() {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    axios
      .get(GLOBAL.HOST + "/get-course-popularity-admin", authHeaders())
      .then((response) => {
        console.log(response);
        setDataSource(
          response.data.map((item) => ({
            title: item.courseName,
            rating: item.rating,
            ratingCount: item.ratingCount,
            enrolledStudentCount: item.enrolledStudentCount,
            reviewCount: item.reviewCount,
            value:
              item.rating * 40 +
              item.ratingCount * 10 +
              item.enrolledStudentCount * 30 +
              item.reviewCount * 20,
          }))
        );
      });
  }, []);

  // const dataSource = data.map((item) => ({
  //   ...item,
  //   value:
  //     item.rating * item.ratingValue * 0.35 +
  //     item.review * 0.15 +
  //     item.purchase * 0.5,
  // }));
  function customizeTooltip(arg) {
    const data = arg.point.data;
    return (
      <Grid container direction="column">
        <Typography variant="h6">{data.title}</Typography>
        <Typography variant="body2">{`Rating: ${data.rating} (${data.ratingCount})`}</Typography>
        <Typography variant="body2">Review: {data.reviewCount}</Typography>
        <Typography variant="body2">
          Purchase: {data.enrolledStudentCount}
        </Typography>
      </Grid>
    );
  }
  return (
    <Card className="chart">
      <CardContent>
        <PieChart
          type="doughnut"
          palette="Bright"
          dataSource={dataSource}
          title="Most Popular Courses"
        >
          <Legend
            orientation="horizontal"
            itemTextPosition="right"
            horizontalAlignment="center"
            verticalAlignment="bottom"
          />
          <Export enabled={true} />
          <Series argumentField="title" valueField="value">
            <Label
              visible={true}
              position="columns"
              customizeText={(arg) => `${arg.percentText}`}
            >
              <Font size={10} />
              <Connector visible={true} width={0.5} />
            </Label>
          </Series>
          <Tooltip enabled={true} contentRender={customizeTooltip} />
        </PieChart>
      </CardContent>
    </Card>
  );
}
