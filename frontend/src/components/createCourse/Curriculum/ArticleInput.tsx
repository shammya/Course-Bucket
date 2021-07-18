import { TextField } from "@material-ui/core";
import { Files } from "classes/Files";
import { convertToRaw } from "draft-js";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { InputLayout, LectureInputProps } from "./InputLayout";

export function ArticleInput({ file, onSave, onCancel }: LectureInputProps) {
  const [title, setTitle] = useState(file?.title);
  const [content, setContent] = useState(file?.content);

  function handleBodyChange(event) {
    const rteContent = convertToRaw(event.getCurrentContent());
    rteContent.blocks[0].text !== "" && setContent(JSON.stringify(rteContent));
  }
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <InputLayout
      onSave={() => onSave(new Files("ARTICLE", title, content))}
      onCancel={onCancel}
    >
      <TextField
        variant="outlined"
        color="primary"
        label="Title"
        defaultValue={title}
        onBlur={handleTitleChange}
      />
      <MUIRichTextEditor
        label="Start typing here..."
        defaultValue={content}
        onChange={handleBodyChange}
      />
    </InputLayout>
  );
}
