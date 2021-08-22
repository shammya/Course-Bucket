import { Grid, IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';
import Carousel from 'react-elastic-carousel';


function navigationArrow(props) {
  if (props.type === "PREV") {
    return (
      <Grid container alignItems="center" style={{ width: "50px" }}>
        <Grid onClick={props.onClick}>
          <IconButton style={{ height: "150px", borderRadius: 10, padding: "0px 0px 0px 12px" }}>
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
  else {
    return (
      <Grid container alignItems="center" style={{ width: "50px" }}>
        <Grid onClick={props.onClick}>
          <IconButton style={{ height: "150px", borderRadius: 10, padding: "0px 6px 0px 6px" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

export default function CustomCarousel(props) {
  return (
    <Carousel {...props} itemPadding={[10, 0, 3, 0]} renderArrow={navigationArrow}>
      {props.children}
    </Carousel>
  )
}
