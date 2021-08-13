import { Button, Link } from "@material-ui/core";
import { CloudDownloadRounded } from "@material-ui/icons";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { LectureOutputProps, OutputLayout } from "./OutputLayout";

export function PDFOutput({ file, onUpdate }: LectureOutputProps) {
  const onFileLoad = (e, file) => console.log(e.target.result, file.name);
  const [pictures, setPictures] = useState({});
  const onChange = (pictures) => setPictures({ pictures });

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <OutputLayout onUpdate={onUpdate}>
      {/* <PDFViewer url={URL.createObjectURL(file?.content?.file)} /> */}
      <MUIRichTextEditor readOnly toolbar={false} defaultValue={file.title} />
      <Link
        href={
          file?.content?.file
            ? URL.createObjectURL(file?.content?.file)
            : file?.content
        }
      >
        <Button style={{ color: "green" }} startIcon={<CloudDownloadRounded />}>
          Download
        </Button>
      </Link>
    </OutputLayout>
  );
}
