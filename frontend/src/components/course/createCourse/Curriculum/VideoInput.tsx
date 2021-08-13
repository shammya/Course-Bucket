import { Files } from "classes/Files";
import { convertToRaw } from "draft-js";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { FileUploader } from "tools/customDesign/FileUploader";
import { InputLayout, LectureInputProps } from "./InputLayout";

export function VideoInput({ file, onSave, onCancel }: LectureInputProps) {
  const [title, setTile] = useState(file?.title);
  const [content, setContent] = useState(file?.content);

  function handleContentChange(event) {
    const rteContent = convertToRaw(event.getCurrentContent());
    rteContent.blocks[0].text !== "" && setContent(JSON.stringify(rteContent));
  }

  return (
    <InputLayout
      onSave={() => onSave(new Files("VIDEO", title).setContent(content))}
      onCancel={onCancel}
    >
      <MUIRichTextEditor
        label="Start typing here..."
        value={content}
        onChange={handleContentChange}
      />
      <FileUploader />
    </InputLayout>
  );
}
