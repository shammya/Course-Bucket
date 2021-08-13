import { TextField } from "@material-ui/core";
import { Files } from "classes/Files";
import React, { useEffect, useState } from "react";
import TextEditor from "tools/customDesign/TextEditor";
import { InputLayout, LectureInputProps } from "./InputLayout";

export function ArticleInput({ file, onSave, onCancel }: LectureInputProps) {
  const [title, setTitle] = useState(file?.title);
  const [content, setContent] = useState(file?.content);

  useEffect(() => {
    setTitle(file?.title);
    setContent(file?.content);
  }, [file?.title, file?.content]);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <InputLayout
      onSave={() => onSave(new Files("ARTICLE", title).setContent(content))}
      onCancel={onCancel}
    >
      <TextField
        variant="outlined"
        color="primary"
        label="Title"
        defaultValue={title}
        onBlur={handleTitleChange}
      />
      <TextEditor
        value={file?.content}
        onChange={(value) => setContent(value)}
      />
    </InputLayout>
  );
}
