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
import React from "react";

function IncomePerCourseChart() {
  let dataSource: Array<{ courseName: string; income: number }> = [];
  for (let i = 0; i < 30; i++) {
    dataSource.push({
      courseName:
        "Course anme is not known. it is very bit title for course " + (i + 1),
      income: 300 + Math.random() * 10000,
    });
  }
  return (
    <Card>
      <CardContent>
        <Chart title="Income per course" dataSource={dataSource} rotated={true}>
          <Series
            valueField="income"
            argumentField="courseName"
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
