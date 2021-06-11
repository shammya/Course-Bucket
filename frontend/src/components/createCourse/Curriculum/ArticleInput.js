import { TextField } from "@material-ui/core";
import { convertToRaw } from "draft-js";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { InputLayout } from "./InputLayout";


export function ArticleInput({
  file = { title: '', body: '' }, onSave, onCancel
}) {
  const [state, setState] = useState(
    { file: file }
  );
  function handleBodyChange(event) {
    const rteContent = convertToRaw(event.getCurrentContent());
    rteContent.blocks[0].text !== "" && setState({ ...state, file: { ...state.file, body: JSON.stringify(rteContent) } });
  }
  function handleTitleChange(event) {
    setState({ ...state, file: { ...state.file, title: event.target.value } });
  }

  return (
    <InputLayout onSave={() => onSave(state.file)} onCancel={onCancel}>
      <TextField
        variant="outlined"
        color="primary"
        label="Title"
        value={state.file.title}
        onChange={handleTitleChange}
      />
      <MUIRichTextEditor
        label="Start typing here..."
        defaultValue={state.file.body}
        onChange={handleBodyChange}
      />
    </InputLayout>
  )
}