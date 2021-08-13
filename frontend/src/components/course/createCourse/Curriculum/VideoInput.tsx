import { Files } from "classes/Files";
import React, { useEffect, useState } from "react";
import TextEditor from "tools/customDesign/TextEditor";
import { FileUploader } from "tools/FileUploader";
import { InputLayout, LectureInputProps } from "./InputLayout";

export function VideoInput({ file, onSave, onCancel }: LectureInputProps) {
  const [title, setTitle] = useState(file?.title);
  const [content, setContent] = useState(file?.content);

  useEffect(() => {
    setTitle(file?.title);
    setContent(file?.content);
  }, [file?.title, file?.content]);
  console.log(content);
  return (
    <InputLayout
      onSave={() => onSave(new Files("VIDEO", title).setContent(content))}
      onCancel={onCancel}
    >
      <FileUploader
        fileObjects={file?.content?.file ? [file.content] : []}
        filesLimit={1}
        type="video"
        onChange={(files) => setContent(files[0])}
      />
      <TextEditor value={title} onChange={(value) => setTitle(value)} />
    </InputLayout>
  );
}
