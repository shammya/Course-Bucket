import {
  Button,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useState } from "react";

function RatingBox() {
  const [ratingValue, setRatingValue] = useState<number | null>(0);
  return (
    <Card style={{ width: "100%" }}>
      <CardContent>
        <Grid container direction="column" xs spacing={3}>
          <Grid item container>
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
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            xs
            spacing={2}
          >
            <Grid
              item
              container
              direction="row"
              wrap="nowrap"
              justify="center"
              xs
              spacing={2}
            >
              <Grid item>
                <Typography variant="body1">Give a rating </Typography>
              </Grid>
              <Grid item>
                <Rating
                  value={ratingValue}
                  onChange={(event, value) => setRatingValue(value)}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="center"
              xs
              spacing={2}
              style={{ display: ratingValue === 0 ? "none" : "flex" }}
            >
              <Grid item>
                <Button variant="contained" color="secondary">
                  Submit
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setRatingValue(0)}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default RatingBox;
