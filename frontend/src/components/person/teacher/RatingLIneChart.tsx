import { Card, CardContent } from "@material-ui/core";
import axios from "axios";
import { authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";
import {
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
  state: string;
  rating: number;
}
export function RatingLineChart() {
  // const dataSource: Array<ISource> = [];
  // function generateRandomData() {
  //   let n = 30;
  //   for (let i = 0; i < n; i++) {
  //     let data;
  //     let date = new Date().setDate(new Date().getDate() - (n - 1 - i));
  //     data = new Date(date).toLocaleString("default", {
  //       day: "numeric",
  //       month: "long",
  //     });
  //     console.log(data);
  //     dataSource.push({
  //       state: data,
  //       rating: Math.random() * 5,
  //     });
  //   }
  // }
  // generateRandomData();
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    axios
      .get(
        GLOBAL.HOST + "/get-cumulative-rating-teacher/mehediT",
        authHeaders()
      )
      .then((response) => {
        console.log(response);
        setDataSource(
          response.data.map((item) => ({
            date: new Date(item.date).toLocaleString("default", {
              day: "numeric",
              month: "long",
            }),
            rating: item.rating,
          }))
        );
      });
  }, []);
  console.log(dataSource);
  return (
    <Card>
      <CardContent style={{ textAlign: "center" }}>
        <Chart title="Rating" dataSource={dataSource}>
          <CommonSeriesSettings argumentField="date" type="spline" />
          <Series valueField="rating" name="Rating" />
          <ValueAxis>
            <Title text="Rating" />
          </ValueAxis>
          <Legend visible={false} />
          <Export enabled={true} />
          <Tooltip enabled={true} />
          <ScrollBar visible={true} />
          <ZoomAndPan argumentAxis="both" />
        </Chart>
      </CardContent>
    </Card>
  );
}
