import { TextField } from "@material-ui/core";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { InputLayout } from "./InputLayout";

export function LinkInput() {
  const [link, setLink] = useState('http://');
  return (
    <InputLayout>
      <MUIRichTextEditor
        label="Start typing here..."
      />
      <TextField
        label="Source Link"
        variant="outlined"
        onChange={event => setLink("http://" + event.target.value)}
        InputProps={{
          startAdornment: ("http://")
        }}
      />
    </InputLayout>
  )
}