import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import GridImageView from 'tools/customDesign/ImageVeiw';
import SliderService from './AdminPanel/api/SliderService';

const images = [
  require('assets/banner/Banner-1.jpg'),
  require('assets/banner/Banner-2.jpg'),
  require('assets/banner/Banner-3.jpg'),
  require('assets/banner/Banner-4.jpg'),
]


export default function ImageSlider(props) {

  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    SliderService.getSliders().then(response => {
      setSliders(response.data);
    })
  }, [])

  return (
    <Carousel
      className="carousel-root"
      animation="slide"
      fullHeightHover={true}
      stopAutoPlayOnHover={true}
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
    // style={{ width: '100%' }}
    >
      {
        sliders?.map((slider, i) => <GridImageView key={slider.id} src={slider.file.content} wrapperProps={{ container: true, justifyContent: 'center', style: { height: 729 } }} imgProps={{ style: { maxHeight: '50vh' } }} />)
      }
    </Carousel >
  )
}

