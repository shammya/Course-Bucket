import MUIRichTextEditor from "mui-rte";
import React, { useEffect, useState } from "react";
import { InputLayout, LectureInputProps } from "./InputLayout";
import { FileUploader } from "tools/FileUploader";
import { Files } from "classes/Files";
import { convertToRaw } from "draft-js";
import TextEditor from "tools/customDesign/TextEditor";

export function PDFInput({ file, onSave, onCancel }: LectureInputProps) {
  const [title, setTitle] = useState(file?.title);
  const [content, setContent] = useState(file?.content);

  useEffect(() => {
    setTitle(file?.title);
    setContent(file?.content);
  }, [file?.title, file?.content]);

  return (
    <InputLayout
      onSave={() => onSave(new Files("PDF", title).setContent(content))}
      onCancel={onCancel}
    >
      <FileUploader
        fileObjects={file?.content?.file ? [file.content] : []}
        filesLimit={1}
        type="pdf"
        onChange={(files) => setContent(files[0])}
      />
      <TextEditor value={file?.title} onChange={(value) => setTitle(value)} />
    </InputLayout>
  );
}
