import { Card, CardContent, Grid, MenuItem, Select } from "@material-ui/core";
import {
  ArgumentAxis,
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
  enrolledStudent: number;
  review: number;
  rating1: number;
  rating2: number;
  rating3: number;
  rating4: number;
  rating5: number;
}
const viewTypeArray = ["Last 7 days", "Last 30 days", "Last 1 year"];
interface ICourse {
  id: number;
  name: string;
}
const courseArray: Array<ICourse> = [
  { id: 1, name: "Course name 1" },
  { id: 2, name: "Course name 2" },
  { id: 3, name: "Course name 3" },
  { id: 4, name: "Course name 4" },
  { id: 5, name: "Course name 5" },
  { id: 6, name: "Course name 6" },
  { id: 7, name: "Course name 7" },
];
export function OverviewBarChart() {
  const [viewType, setViewType] = useState(viewTypeArray[1]);
  const [course, setCourse] = useState<ICourse>(courseArray[0]);

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
        enrolledStudent: 10,
        review: 20,
        rating1: 3,
        rating2: 4,
        rating3: 0,
        rating4: 10,
        rating5: 2,
      });
    }
  }
  generateRandomData();

  //   <SelectBox
  //   dataSource={viewTypeArray}
  //   defaultValue={viewTypeArray[1]}
  //   onSelectionChanged={(event) =>
  //     setViewType(event.selectedItem as string)
  //   }
  // />
  return (
    <Card>
      <CardContent style={{ textAlign: "center" }}>
        <Chart title="Overview" dataSource={dataSource}>
          <CommonSeriesSettings argumentField="state" type="stackedBar" />
          <Series
            valueField="enrolledStudent"
            name="Enrolled Student"
            stack="Enrolled Student"
          />
          {console.log("rendering")}
          <Series valueField="review" name="Review" stack="Review" />
          <Series valueField="rating1" name="1 star" stack="Rating" />
          <Series valueField="rating2" name="2 star" stack="Rating" />
          <Series valueField="rating3" name="3 star" stack="Rating" />
          <Series valueField="rating4" name="4 star" stack="Rating" />
          <Series valueField="rating5" name="5 star" stack="Rating" />
          <ValueAxis>
            <Title text="Student number" />
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
          <ArgumentAxis
          // defaultVisualRange={{ startValue: 300, endValue: 500 }}
          />
          <ScrollBar visible={true} position="bottom" />
          <ZoomAndPan argumentAxis="both" />
        </Chart>
        <Grid container direction="row" justifyContent="center" xs spacing={1}>
          <Grid item>
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
          <Grid item>
            <Select
              value={course}
              onChange={(event) => setCourse(event.target.value as ICourse)}
              variant="outlined"
            >
              {courseArray.map((item) => (
                <MenuItem
                  key={item.id}
                  // @ts-ignore
                  value={item}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
