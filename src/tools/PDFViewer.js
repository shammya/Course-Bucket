import React, { useState } from 'react'; import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdf from './sample.pdf';

export function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <PDFViewer
        document={{
          url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
        }}
      />
    </div>
  );
}