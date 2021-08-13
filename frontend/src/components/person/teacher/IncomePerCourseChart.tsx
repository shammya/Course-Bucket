import { Card, CardContent } from "@material-ui/core";
import {
  Chart,
  Export,
  Format,
  Legend,
  ScrollBar,
  Series,
  Tooltip,
  ZoomAndPan,
} from "devextreme-react/chart";
import axios from "axios";
import { authHeaders } from "components/auth/api/AuthService";
import { GLOBAL } from "Configure.js";
import React, { useEffect, useState } from "react";

function IncomePerCourseChart() {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    axios
      .get(GLOBAL.HOST + "/get-income-per-course-teacher", authHeaders())
      .then((response) => {
        console.log(response);
        setDataSource(
          response.data.map((item) => ({
            title: item.title,
            income: item.income,
          }))
        );
      });
  }, []);
  return (
    <Card>
      <CardContent>
        <Chart title="Income per course" dataSource={dataSource} rotated={true}>
          <Series
            valueField="income"
            argumentField="title"
            type="bar"
            color="#199FE0"
          />
          <Tooltip enabled={true}>
            <Format type="fixedPoint" precision={0} />
          </Tooltip>
          <Legend visible={false} />
          <Export enabled={true} />
          <ScrollBar visible={true} position="bottom" />
          <ZoomAndPan argumentAxis="both" />
        </Chart>
      </CardContent>
    </Card>
  );
}

export default IncomePerCourseChart;
