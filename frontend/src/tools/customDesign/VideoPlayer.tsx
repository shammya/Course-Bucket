import { Grid } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player/lazy";

export default function VideoPlayer({ url }: { url: string }) {
  return (
    <Grid container>
      <ReactPlayer
        // className="react-player"
        width="100%"
        height="auto"
        style={{ width: "100%", height: "auto" }}
        url={url}
        controls={true}
        volume={1}
      />
    </Grid>
  );
}

// "Authorization",
// "Bearer " +
//   JSON.parse(localStorage.getItem("user") + "")?.token
