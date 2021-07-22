import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Chart, Series } from "devextreme-react/chart";
import PieChart, {
  Connector,
  Export,
  Font,
  Label,
  Legend,
  Tooltip,
} from "devextreme-react/pie-chart";
import React from "react";

export function CoursePopularityPieChart() {
  const data = [
    {
      title: "Course name 1",
      rating: 20,
      ratingValue: 4.78,
      review: 100,
      purchase: 10,
    },
    {
      title: "Course name 2",
      rating: 2,
      ratingValue: 5,
      review: 12,
      purchase: 192,
    },
    {
      title: "Course name 3",
      rating: 10,
      ratingValue: 4.98,
      review: 50,
      purchase: 230,
    },
    {
      title: "Course name 4",
      rating: 20,
      ratingValue: 4.76,
      review: 20,
      purchase: 12,
    },
    {
      title: "Course name 5",
      rating: 100,
      ratingValue: 3.99,
      review: 25,
      purchase: 0,
    },
    {
      title: "Course name 6",
      rating: 2,
      ratingValue: 1.2,
      review: 43,
      purchase: 30,
    },
    {
      title: "Course name 7",
      rating: 15,
      ratingValue: 2.1,
      review: 53,
      purchase: 40,
    },
    {
      title: "Course name 8",
      rating: 22,
      ratingValue: 3.2,
      review: 23,
      purchase: 55,
    },
    {
      title: "Course name 9",
      rating: 1,
      ratingValue: 5,
      review: 100,
      purchase: 67,
    },
  ];
  const dataSource = data.map((item) => ({
    ...item,
    value:
      item.rating * item.ratingValue * 0.35 +
      item.review * 0.15 +
      item.purchase * 0.5,
  }));
  function customizeTooltip(arg) {
    const data = arg.point.data;
    return (
      <Grid container direction="column">
        <Typography variant="h6">{data.title}</Typography>
        <Typography variant="body2">{`Rating: ${data.ratingValue} (${data.rating})`}</Typography>
        <Typography variant="body2">Review: {data.review}</Typography>
        <Typography variant="body2">Purchase: {data.purchase}</Typography>
      </Grid>
    );
  }
  return (
    <Card>
      <CardContent>
        <PieChart
          type="doughnut"
          palette="Bright"
          dataSource={dataSource}
          title="Popularity"
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
