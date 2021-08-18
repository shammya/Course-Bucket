import { Button, Grid } from "@material-ui/core";
import { Files } from "classes/Files";
import React, { ReactElement } from "react";

export interface LectureOutputProps {
  editable: boolean;
  file: Files;
  onUpdate: () => void;
}

export function OutputLayout({
  editable,
  onUpdate,
  children,
}: {
  editable: boolean;
  onUpdate: () => void;
  children: ReactElement[] | ReactElement;
}) {
  return (
    <Grid container direction="column">
      <Grid item container direction="column">
        {children}
      </Grid>
      {editable && (
        <Grid item container direction="row" justifyContent="center">
          <Button color="primary" variant="outlined" onClick={onUpdate}>
            Update
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
