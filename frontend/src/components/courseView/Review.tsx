import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import { lorem } from "views/Course";

function ReviewBox() {
  return (
    <Card>
      <CardContent>
        <Grid container direction="row" wrap="nowrap" xs spacing={2}>
          <Grid item>
            <Avatar />
          </Grid>
          <Grid item container direction="column">
            <Grid>
              <Typography variant="h5">Reviewer Name</Typography>
            </Grid>
            <Grid item container direction="row" xs spacing={2}>
              <Grid item>
                <Rating value={3} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">4 weeks ago</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body1">{lorem + lorem}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ReviewBox;
