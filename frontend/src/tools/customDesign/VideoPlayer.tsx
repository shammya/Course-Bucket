import { Grid } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player/lazy";

export default function VideoPlayer({ url }: { url: string }) {
  return (
    <Grid container>
      <ReactPlayer url={url} controls={true} volume={1} />
    </Grid>
  );
}
