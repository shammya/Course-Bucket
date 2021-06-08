import { Button, Grid } from "@material-ui/core";
import React from "react";

export function OutputLayout({ children }) {
  return (
    <Grid
      container
      direction="column"
    >
      <Grid item container direction="column">
        {children}
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
      >
        <Button color="primary" variant="outlined">Update</Button>
      </Grid>
    </Grid>
  )
}