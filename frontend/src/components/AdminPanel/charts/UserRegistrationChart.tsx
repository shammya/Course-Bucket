import { Card, CardContent, Grid, MenuItem, Select } from "@material-ui/core";
import {
  Border,
  Chart,
  CommonSeriesSettings,
  Export,
  Legend,
  ScrollBar,
  Series,
  Title,
  Tooltip,
  ValueAxis,
  ZoomAndPan,
} from "devextreme-react/chart";
import React, { useState } from "react";

interface ISource {
  state: string;
  teacher: number;
  student: number;
}
const viewTypeArray = ["Last 7 days", "Last 30 days", "Last 1 year"];

export function UserRegistrationChart() {
  const [viewType, setViewType] = useState(viewTypeArray[1]);

  const dataSource: Array<ISource> = [];
  function generateRandomData() {
    let n =
      viewType == viewTypeArray[0]
        ? 7
        : viewType === viewTypeArray[1]
        ? 30
        : 12;
    for (let i = 0; i < n; i++) {
      let data;
      if (viewType == viewTypeArray[0]) {
        let date = new Date().setDate(new Date().getDate() - (n - 1 - i));
        data = new Date(date).toLocaleString("default", { weekday: "short" });
      } else if (viewType == viewTypeArray[1]) {
        let date = new Date().setDate(new Date().getDate() - (n - 1 - i));
        data = new Date(date).toLocaleString("default", {
          day: "numeric",
          month: "long",
        });
      } else if (viewType == viewTypeArray[2]) {
        let date = new Date().setMonth(new Date().getMonth() - (n - 1 - i));
        data = new Date(date).toLocaleString("default", {
          month: "short",
          year: "numeric",
        });
      }
      console.log(data);
      dataSource.push({
        state: data,
        teacher: Math.round(Math.random() * 200),
        student: Math.round(Math.random() * 200),
      });
    }
  }
  generateRandomData();

  return (
    <Card>
      <CardContent style={{ textAlign: "center" }}>
        <Chart title="Overview" dataSource={dataSource}>
          <CommonSeriesSettings argumentField="state" type="stackedBar" />
          <Series valueField="teacher" name="Teacher" stack="Teacher" />
          <Series valueField="student" name="Student" stack="Student" />
          <ValueAxis>
            <Title text="Count" />
          </ValueAxis>
          <Legend
            position="outside"
            horizontalAlignment="center"
            verticalAlignment="bottom"
          >
            <Border visible={true} />
          </Legend>
          <Export enabled={true} />
          <Tooltip enabled={true} />
          <ScrollBar visible={true} position="bottom" />
          <ZoomAndPan argumentAxis="both" />
        </Chart>
        <Grid container justifyContent="center">
          <Select
            value={viewType}
            onChange={(event) => setViewType(event.target.value as string)}
            variant="outlined"
          >
            {viewTypeArray.map((item) => (
              <MenuItem
                key={item}
                // @ts-ignore
                value={item}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </CardContent>
    </Card>
  );
}
