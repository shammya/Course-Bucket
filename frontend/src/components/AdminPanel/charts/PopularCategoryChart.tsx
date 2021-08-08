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
import { authHeader as authHeaders } from "components/auth/api/AuthService";
import { global } from "Configure.js";
import React, { useEffect, useState } from "react";



function PopularCategoryChart() {
  // let dataSource: Array<{ categoryName: string; purchase: number }> = [];
  // for (let i = 0; i < 30; i++) {
  //   dataSource.push({
  //     categoryName: "Category " + (i + 1),
  //     purchase: 300 + Math.random() * 10000,
  //   });
  // }

  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    axios
      .get(
        global.HOST + "/get-popular-category-admin",
        authHeaders()
      )
      .then((response) => {
        console.log(response);
        setDataSource(
          response.data.map((item) => ({
            categoryName:item.categoryName,
            factor: ((item.enrolledStdCount * 0.6 + item.reviewCount * 0.1 + item.rating * item.ratingCount * 0.3))
          }))
        );
      });
  }, []);


  return (
    <Card>
      <CardContent>
        <Chart title="Popular Category" dataSource={dataSource} rotated={true}>
          <Series
            valueField="factor"
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
