import { TextField } from "@material-ui/core";
import { Files } from "classes/Files";
import { convertToRaw } from "draft-js";
import MUIRichTextEditor from "mui-rte";
import React, { useEffect, useState } from "react";
import TextEditor from "tools/customDesign/TextEditor";
import { InputLayout, LectureInputProps } from "./InputLayout";

export function LinkInput({ file, onSave, onCancel }: LectureInputProps) {
  const [link, setLink] = useState(file?.title);
  const [content, setContent] = useState(file?.content);

  useEffect(() => {
    setLink(file?.title);
    setContent(file?.content);
  }, [file?.title, file?.content]);

  return (
    <InputLayout
      onSave={() => onSave(new Files("LINK", link).setContent(content))}
      onCancel={onCancel}
    >
      <TextEditor
        value={file?.content}
        onChange={(value) => setContent(value)}
      />
      <TextField
        label="Source Link"
        variant="outlined"
        defaultValue={link}
        onBlur={(event) => setLink(event.target.value)}
        InputProps={{
          startAdornment: "http://",
        }}
      />
    </InputLayout>
  );
}
