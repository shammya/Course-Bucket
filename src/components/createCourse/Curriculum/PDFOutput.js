import MUIRichTextEditor from "mui-rte";
// import PDFViewer from "pdf-viewer-reactjs";
import React, { useState } from "react";
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
      {/* <PDFViewer
        document={{
          url: 'https://juventudedesporto.cplp.org/files/sample-pdf_9359.pdf',
        }}
      /> */}
      <MUIRichTextEditor
        readOnly
        toolbar={false}
      />
    </OutputLayout>
  )
}