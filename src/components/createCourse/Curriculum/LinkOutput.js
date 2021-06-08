import { Grid, Link, Typography } from "@material-ui/core";
import MUIRichTextEditor from "mui-rte";
import React from "react";
import { OutputLayout } from "./OutputLayout";


export function LinkOutput() {
  const url = "http://google.com";
  return (
    <OutputLayout>
      <MUIRichTextEditor
        readOnly
        toolbar={false}
      />
      <Grid item container direction="row" alignItems="center">
        <Typography variant="h6">Source link: </Typography>
        <Typography><Link href={url}>{url}</Link></Typography>
      </Grid>
    </OutputLayout>
  )
}