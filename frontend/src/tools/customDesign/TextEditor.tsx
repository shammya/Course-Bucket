import { convertToRaw } from "draft-js";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";

export default function TextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [content, setContent] = useState(value);
  const [key, setKey] = useState(100);
  function handleBodyChange(event) {
    const rteContent = convertToRaw(event.getCurrentContent());
    rteContent.blocks[0].text !== "" && setContent(JSON.stringify(rteContent));
  }
  return (
    <MUIRichTextEditor
      key={key}
      label="Start typing here..."
      defaultValue={value}
      onChange={handleBodyChange}
      onBlur={() => {
        console.log(content);
        onChange(content);
      }}
    />
  );
}
