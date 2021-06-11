import { Button, Grid } from "@material-ui/core";
import React from "react";


export function InputLayout({
  onSave, onCancel, children
}) {
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
        <Button
          color="primary"
          variant="outlined"
          onClick={onSave}
        >
          Save
          </Button>
        <Button
          color="secondary"
          variant="outlined"
          onClick={onCancel}
        >
          Cancel
          </Button>
      </Grid>
    </Grid>
  )
}