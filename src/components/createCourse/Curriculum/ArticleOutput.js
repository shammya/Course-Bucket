import { Typography } from "@material-ui/core";
import MUIRichTextEditor from "mui-rte";
import React from "react";
import { OutputLayout } from "./OutputLayout";

export function ArticleOutput() {
  return (
    <OutputLayout
    >
      <Typography variant="h3">Title</Typography>
      <MUIRichTextEditor
        readOnly
        toolbar={false}
        defaultValue=""
      />
    </OutputLayout>
  )
}