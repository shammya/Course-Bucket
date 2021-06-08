import MUIRichTextEditor from "mui-rte";
import React from "react";
import { InputLayout } from "./InputLayout";
import { FileUploader } from "tools/FileUploader";

export function VideoInput() {
  const onFileLoad = (e, file) => console.log(e.target.result, file.name);
  return (
    <InputLayout>
      <MUIRichTextEditor />
      <FileUploader />
    </InputLayout>
  )
}