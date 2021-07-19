import {
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";

function RatingBox() {
  return (
    <Card style={{ width: "100%" }}>
      <CardContent>
        <Grid container>
          <Grid item md={2} xs={3} container direction="column">
            <Grid item>
              <Typography>4.7</Typography>
            </Grid>
            <Grid item>...Rating</Grid>
            <Grid item>
              <Typography>Course Rating</Typography>
            </Grid>
          </Grid>
          <Grid item md={10} xs={9} container direction="column">
            {[5, 4, 3, 2, 1].map((value) => (
              <Grid
                container
                direction="row"
                wrap="nowrap"
                alignItems="center"
                spacing={1}
              >
                <Grid item style={{ width: "100%" }}>
                  <LinearProgress
                    variant="determinate"
                    value={(value / 5) * 100}
                  />
                </Grid>
                <Grid item>
                  <Rating value={value} readOnly />
                </Grid>
                <Grid item>
                  <Typography>{value}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default RatingBox;
