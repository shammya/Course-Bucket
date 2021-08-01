import { Button, Grid } from "@material-ui/core";
import { Files } from "classes/Files";
import React, { ReactElement } from "react";

export interface LectureOutputProps {
  file: Files;
  onUpdate: () => void;
}

export function OutputLayout({
  onUpdate,
  children,
}: {
  onUpdate: () => void;
  children: ReactElement[] | ReactElement;
}) {
  return (
    <Grid container direction="column">
      <Grid item container direction="column">
        {children}
      </Grid>
      <Grid item container direction="row" justify="center">
        <Button color="primary" variant="outlined" onClick={onUpdate}>
          Update
        </Button>
      </Grid>
    </Grid>
  );
}
