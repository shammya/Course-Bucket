import { TextField } from "@material-ui/core";
import { convertToRaw } from "draft-js";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { InputLayout } from "./InputLayout";


export function ArticleInput() {
  const [value, setValue] = useState('');
  function handleChange(event) {
    const rteContent = convertToRaw(event.getCurrentContent());
    rteContent.blocks[0].text !== "" && setValue(JSON.stringify(rteContent));
  }
  console.log(value);
  return (
    <InputLayout>
      <TextField
        variant="outlined"
        color="primary"
        label="Title"
      />
      <MUIRichTextEditor
        label="Start typing here..."
        onChange={handleChange}
      />
    </InputLayout>
  )
}