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

function PopularCategoryChart() {
  let dataSource: Array<{ categoryName: string; purchase: number }> = [];
  for (let i = 0; i < 30; i++) {
    dataSource.push({
      categoryName: "Category " + (i + 1),
      purchase: 300 + Math.random() * 10000,
    });
  }
  return (
    <Card>
      <CardContent>
        <Chart title="Popular Category" dataSource={dataSource} rotated={true}>
          <Series
            valueField="purchase"
            argumentField="categoryName"
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

export default PopularCategoryChart;
