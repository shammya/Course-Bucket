import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import VideoPlayer from "tools/customDesign/VideoPlayer";

import { LectureOutputProps, OutputLayout } from "./OutputLayout";

export function VideoOutput({ file, onUpdate }: LectureOutputProps) {
  return (
    <OutputLayout onUpdate={onUpdate}>
      <VideoPlayer
        url={
          file?.content?.file
            ? URL.createObjectURL(file?.content?.file)
            : file.content
        }
      />
      <MUIRichTextEditor readOnly toolbar={false} defaultValue={file.title} />
    </OutputLayout>
  );
}
