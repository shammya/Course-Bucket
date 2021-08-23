import { Button, Grid } from "@material-ui/core";
import { Files } from "classes/Files";
import React, { ReactElement } from "react";

export interface LectureInputProps {
  file: Files;
  onSave: (Files) => void;
  onCancel: () => void;
}

export function InputLayout({
  onSave,
  onCancel,
  children,
}: {
  onSave: () => void;
  onCancel: () => void;
  children: ReactElement | ReactElement[];
}) {
  return (
    <Grid container direction="column">
      <Grid item container direction="column">
        {children}
      </Grid>
      <Grid item container direction="row" justifyContent="center">
        <Grid item>
          <Button color="primary" variant="outlined" onClick={onSave}>
            Save
          </Button>
        </Grid>
        <Grid item>
          <Button color="secondary" variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
