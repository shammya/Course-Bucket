import { convertToRaw } from "draft-js";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";

export default function TextEditor({
  value,
  onChange,
  readOnly = false,
}: {
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}) {
  const [content, setContent] = useState(value ? value : "");
  const [key, setKey] = useState(100);
  function handleBodyChange(event) {
    const rteContent = convertToRaw(event.getCurrentContent());
    rteContent.blocks[0].text !== "" && setContent(JSON.stringify(rteContent));
  }
  return (
    <MUIRichTextEditor
      toolbar={!readOnly}
      key={key}
      label="Start typing here..."
      defaultValue={value}
      onChange={handleBodyChange}
      readOnly={readOnly}
      onBlur={() => {
        console.log(content);
        if (onChange) onChange(content);
      }}
    />
  );
}
