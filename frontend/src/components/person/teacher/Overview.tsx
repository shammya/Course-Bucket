import { Card, CardContent, Grid, MenuItem, Select } from "@material-ui/core";
import axios from "axios";
import { authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure";
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
import React, { useEffect, useState } from "react";
import TeacherService from "../api/TeacherService";

interface ISource {
  date: Date | string;
  enrStdCount: number;
  reviewCount: number;
  oneStar: number;
  twoStar: number;
  threeStar: number;
  fourStar: number;
  fiveStar: number;
}
const viewTypeArray = ["Last 7 days", "Last 30 days", "Last 1 year"];
interface ICourse {
  id: number;
  title: string;
  image?: string;
}

function convertToDay(date: Date) {
  return date.toLocaleString("default", { weekday: "short" });
}
function convertToDate(date: Date) {
  return date.toLocaleString("default", {
    day: "numeric",
    month: "long",
  });
}
function convertToMonth(date: Date) {
  return date.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
}

function generateArrayByDay(
  source: ISource[],
  day: number,
  format: (item: Date) => string
) {
  let array: ISource[] = [];
  for (let i = 0; i < day; i++) {
    let date = new Date(
      new Date().setDate(new Date().getDate() - (day - 1 - i))
    );
    date.setHours(0, 0, 0, 0);
    let data = source.filter(
      (item) => (item.date as Date).getTime() == date.getTime()
    );
    console.log(source[0].date, new Date(source[0].date), date, data);
    array.push({
      date: format(date), //new Date(date).toLocaleString("default", { weekday: "short" }),
      enrStdCount: data.length ? data[0].enrStdCount : 0,
      reviewCount: data.length ? data[0].reviewCount : 0,
      oneStar: data.length ? data[0].oneStar : 0,
      twoStar: data.length ? data[0].twoStar : 0,
      threeStar: data.length ? data[0].threeStar : 0,
      fourStar: data.length ? data[0].fourStar : 0,
      fiveStar: data.length ? data[0].fiveStar : 0,
    });
  }
  console.log(day + " days", array);
  return array;
}
function generateArrayByMonth(
  source: ISource[],
  month: number,
  format: (item: Date) => string
) {
  let array: ISource[] = [];
  for (let i = 0; i < month; i++) {
    let date = new Date(
      new Date().setMonth(new Date().getMonth() - (month - 1 - i))
    );
    date.setHours(0, 0, 0, 0);
    let enrStdCount: number = 0;
    let reviewCount: number = 0;
    let oneStar: number = 0;
    let twoStar: number = 0;
    let threeStar: number = 0;
    let fourStar: number = 0;
    let fiveStar: number = 0;
    let data = source.map((item) => {
      if ((item.date as Date).getMonth() == date.getMonth()) {
        enrStdCount += item.enrStdCount;
        reviewCount += item.reviewCount;
        oneStar += item.oneStar;
        twoStar += item.twoStar;
        threeStar += item.threeStar;
        fourStar += item.fourStar;
        fiveStar += item.fiveStar;
      }
    });
    console.log("format", format(date));
    array.push({
      date: format(date), //new Date(date).toLocaleString("default", { weekday: "short" }),
      enrStdCount: enrStdCount,
      reviewCount: reviewCount,
      oneStar: oneStar,
      twoStar: twoStar,
      threeStar: threeStar,
      fourStar: fourStar,
      fiveStar: fiveStar,
    });
  }
  console.log(month + " days", array);
  return array;
}

export function OverviewBarChart() {
  const [viewType, setViewType] = useState(viewTypeArray[0]);
  const [courseArray, setCourseArray] = useState<ICourse[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<ICourse>({
    id: 0,
    title: "--Select--",
  });
  const [dataSource, setDataSource] = useState<ISource[]>([]);
  const [temp, setTemp] = useState<ISource[]>([]);
  useEffect(() => {
    loadCourseName();
  }, []);
  async function loadCourseName() {
    await TeacherService.getCreateCourse().then((response) => {
      console.log("create course fetched", response.data);
      let array = response.data.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.coverContent,
      }));
      setCourseArray(array);
      handleCourseChange(array[0]);
    });
  }
  async function handleCourseChange(course) {
    await setSelectedCourse(course);
    await axios
      .get(
        GLOBAL.HOST + `/get-course-overview-teacher/${course.id}`,
        authHeaders()
      )
      .then((response) => {
        console.log("overview fetch for course " + course.title, response.data);
        let source = response.data.overviewContents.map((item) => ({
          ...item,
          date: new Date(item.date),
        }));
        setDataSource(source);
        handleViewTypeChange(source, viewTypeArray[0]);
      });
  }
  function handleViewTypeChange(source: ISource[], type) {
    console.log(type);
    setViewType(type);
    switch (type) {
      case viewTypeArray[0]:
        setTemp(generateArrayByDay(source, 7, convertToDay));
        break;
      case viewTypeArray[1]:
        setTemp(generateArrayByDay(source, 30, convertToDate));
        break;
      case viewTypeArray[2]:
        setTemp(generateArrayByMonth(source, 12, convertToMonth));
        break;
    }
  }

  return (
    <Card>
      <CardContent style={{ textAlign: "center" }}>
        <Chart title="Overview" dataSource={temp}>
          <CommonSeriesSettings argumentField="date" type="stackedBar" />
          <Series
            valueField="enrStdCount"
            name="Enrolled Student"
            stack="Enrolled Student"
          />
          <Series valueField="reviewCount" name="Review" stack="Review" />
          <Series valueField="oneStar" name="1 star" stack="Rating" />
          <Series valueField="twoStar" name="2 star" stack="Rating" />
          <Series valueField="threeStar" name="3 star" stack="Rating" />
          <Series valueField="fourStar" name="4 star" stack="Rating" />
          <Series valueField="fiveStar" name="5 star" stack="Rating" />
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
        <Grid container direction="row" justifyContent="center" spacing={1}>
          <Grid item>
            <Select
              value={viewType}
              onChange={(event) =>
                handleViewTypeChange(dataSource, event.target.value as string)
              }
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
              value={selectedCourse}
              onChange={(event) => handleCourseChange(event.target.value)}
              variant="outlined"
            >
              {courseArray.map((item) => (
                <MenuItem
                  key={item.id}
                  // @ts-ignore
                  value={item}
                >
                  <Grid
                    container
                    direction="row"
                    spacing={1}
                    justifyContent="flex-start"
                  >
                    <Grid item>
                      <img src={item.image} style={{ width: 40, height: 25 }} />
                    </Grid>
                    <Grid item>{item.title}</Grid>
                  </Grid>
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
