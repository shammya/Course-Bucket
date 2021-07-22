import { TextField } from "@material-ui/core";
import { Files } from "classes/Files";
import { convertToRaw } from "draft-js";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { InputLayout, LectureInputProps } from "./InputLayout";

export function LinkInput({ file, onSave, onCancel }: LectureInputProps) {
  const [link, setLink] = useState(file?.title);
  const [content, setContent] = useState(file?.content);

  function handleContentChange(event) {
    const rteContent = convertToRaw(event.getCurrentContent());
    rteContent.blocks[0].text !== "" && setContent(JSON.stringify(rteContent));
  }

  return (
    <InputLayout
      onSave={() => onSave(new Files("LINK", link, content))}
      onCancel={onCancel}
    >
      <MUIRichTextEditor
        label="Start typing here..."
        defaultValue={content}
        onChange={handleContentChange}
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
