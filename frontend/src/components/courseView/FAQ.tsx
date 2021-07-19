import { Avatar, CardContent, Grid, Typography, Card } from "@material-ui/core";
import React from "react";
import { lorem } from "views/Course";

function FAQBox() {
  return (
    <Card>
      <CardContent>
        <Grid container direction="row" wrap="nowrap" xs spacing={2}>
          <Grid item>
            <Avatar />
          </Grid>
          <Grid item container direction="column">
            <Grid>
              <Typography variant="h5">Questioner</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">4 weeks ago</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{lorem + lorem}</Typography>
            </Grid>
            <Grid item style={{ marginTop: 20 }}>
              <Grid container direction="row" wrap="nowrap" xs spacing={2}>
                <Grid item>
                  <Avatar />
                </Grid>
                <Grid item container direction="column">
                  <Grid>
                    <Typography variant="h5">Respondent</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">4 weeks ago</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">{lorem + lorem}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default FAQBox;
