import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import VideoPlayer from 'react-simple-video-player';
import { OutputLayout } from "./OutputLayout";


export function VideoOutput() {
  const onFileLoad = (e, file) => console.log(e.target.result, file.name);
  const [pictures, setPictures] = useState({});
  const onChange = (pictures) => setPictures({ pictures });
  return (
    <OutputLayout>
      <VideoPlayer
        url={require('assets/video/Video-1.mp4')}
        // poster={require('assets/img/Banner-1.jpg')}
        width={400}
        height={300}
        autoplay
      />
      <MUIRichTextEditor
        readOnly
        toolbar={false}
      />
    </OutputLayout>
  )
}