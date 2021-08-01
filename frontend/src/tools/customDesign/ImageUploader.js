import { Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ImageUploader from 'react-images-upload';

export function CustomImageUploader({
  pic = "",
  onPictureChange = (picture) => (console.log(picture))
}) {
  const [picture, setPicture] = useState(pic);
  function handlePictureChange(picture) {
    setPicture(picture);
    onPictureChange(picture);
  }
  return (
    <Grid container direction="column" alignItems="center">
      <Card style={{ width: "50%" }} >
        <img style={{ width: "100%" }} src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg" />
        {/* <CardMedia style={{ height: 300 }} image={"https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"} /> */}
      </Card>
      <ImageUploader
        withIcon={false}
        buttonText={picture.length == 0 ? 'Choose image' : "Change image"}
        withPreview={true}
        singleImage
        onChange={handlePictureChange}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
        withLabel={false}
      />
      {
        picture.length != 0 ?
          <Button style={{ maxWidth: 350 }}>Upload</Button>
          : null
      }
    </Grid>
  )
}