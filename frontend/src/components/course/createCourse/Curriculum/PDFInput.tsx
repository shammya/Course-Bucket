import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { InputLayout, LectureInputProps } from "./InputLayout";
import { FileUploader } from "tools/customDesign/FileUploader";
import { Files } from "classes/Files";
import { convertToRaw } from "draft-js";

export function PDFInput({ file, onSave, onCancel }: LectureInputProps) {
  const [title, setTitle] = useState(file?.title);
  const [content, setContent] = useState(file?.content);

  function handleContentChange(event) {
    const rteContent = convertToRaw(event.getCurrentContent());
    rteContent.blocks[0].text !== "" && setContent(JSON.stringify(rteContent));
  }

  return (
    <InputLayout
      onSave={() => onSave(new Files("PDF", title).setContent(content))}
      onCancel={onCancel}
    >
      <MUIRichTextEditor
        label="Start typing here..."
        defaultValue={content}
        onChange={handleContentChange}
      />
      <FileUploader />
    </InputLayout>
  );
}
