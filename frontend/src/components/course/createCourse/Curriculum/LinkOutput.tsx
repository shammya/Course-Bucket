import { Grid, Link, Typography } from "@material-ui/core";
import MUIRichTextEditor from "mui-rte";
import React from "react";
import { LectureOutputProps, OutputLayout } from "./OutputLayout";

export function LinkOutput({ file, onUpdate }: LectureOutputProps) {
  const url = "http://google.com";
  return (
    <OutputLayout onUpdate={onUpdate}>
      <MUIRichTextEditor readOnly toolbar={false} defaultValue={file.content} />
      <Grid item container direction="row" alignItems="center">
        <Typography variant="h6">Source link: </Typography>
        <Typography>
          <Link href={"http//" + url}>{"http://" + url}</Link>
        </Typography>
      </Grid>
    </OutputLayout>
  );
}
