import { Typography } from "@material-ui/core";
import MUIRichTextEditor from "mui-rte";
import React from "react";
import { LectureOutputProps, OutputLayout } from "./OutputLayout";

export function ArticleOutput({ file, onUpdate }: LectureOutputProps) {
  return (
    <OutputLayout onUpdate={onUpdate}>
      <Typography variant="h3">{file.title}</Typography>
      <MUIRichTextEditor readOnly toolbar={false} defaultValue={file.content} />
    </OutputLayout>
  );
}
