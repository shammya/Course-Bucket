import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const images = [
  require('assets/banner/Banner-1.jpg'),
  require('assets/banner/Banner-2.jpg'),
  require('assets/banner/Banner-3.jpg'),
  require('assets/banner/Banner-4.jpg'),
]


export default function ImageSlider(props) {

  return (
    <Carousel
      animation="slide"
      fullHeightHover={true}
      stopAutoPlayOnHover={false}
      timeout={500}
      navButtonsProps={{
        style: {
          width: 20,
          height: 120,
          backgroundColor: 'cornflowerblue',
          borderRadius: 5
        }
      }}
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon style={{ marginLeft: 12 }} />}
    >
      {
        images.map((src, i) => <Image key={i} src={src.default} />)
      }
    </Carousel >
  )
}

function Image(props) {
  return (
    // <Grid container style={{ padding: "0px 40px" }}>
    <img width="100%" {...props} />
    // </Grid>
  )
}
