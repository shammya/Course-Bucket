import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { PDFOpener } from "tools/PDFViewer";
import { OutputLayout } from "./OutputLayout";

export function PDFOutput() {
  const onFileLoad = (e, file) => console.log(e.target.result, file.name);
  const [pictures, setPictures] = useState({});
  const onChange = (pictures) => setPictures({ pictures });

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <OutputLayout>
      {/* <PDFOpener /> */}
      <MUIRichTextEditor
        readOnly
        toolbar={false}
      />
    </OutputLayout>
  )
}