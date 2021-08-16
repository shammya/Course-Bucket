import { Card, CardContent, Grid, MenuItem, Select } from "@material-ui/core";
import axios from "axios";
import { authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure";
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
import React, { useEffect, useState } from "react";

interface ISource {
  date: Date | string;
  teacher: number;
  student: number;
}
const viewTypeArray = ["Last 7 days", "Last 30 days", "Last 1 year"];

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
      student: data.length ? data[0].student : 0,
      teacher: data.length ? data[0].teacher : 0,
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
    console.log(date);
    date.setHours(0, 0, 0, 0);
    let studentCount: number = 0;
    let teacherCount: number = 0;
    let data = source.map((item) => {
      if ((item.date as Date).getMonth() == date.getMonth()) {
        studentCount += item.student;
        teacherCount += item.teacher;
      }
    });
    console.log(date, data);
    array.push({
      date: format(date), //new Date(date).toLocaleString("default", { weekday: "short" }),
      student: studentCount,
      teacher: teacherCount,
    });
  }
  console.log(month + " days", array);
  return array;
}

export function UserRegistrationChart() {
  const [viewType, setViewType] = useState(viewTypeArray[2]);
  const [dataSource, setDataSource] = useState<ISource[]>([]);
  const [temp, setTemp] = useState<ISource[]>();

  useEffect(() => {
    axios
      .get(GLOBAL.HOST + "/get-new-user-count", authHeaders())
      .then((response) => {
        console.log("new user count chart", response.data);
        let array = response.data.map((item) => ({
          student: item.studentCount,
          teacher: item.teacherCount,
          date: new Date(new Date(item.date).setHours(0, 0, 0, 0)),
        }));
        setDataSource(array);
        handleViewTypeChange(array, viewType);
      });
  }, []);

  function handleViewTypeChange(source, type) {
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
        <Chart title="Teacher and Student Registration" dataSource={temp}>
          <CommonSeriesSettings argumentField="date" type="stackedBar" />
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
      </CardContent>
    </Card>
  );
}
