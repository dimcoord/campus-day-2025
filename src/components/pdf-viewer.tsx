'use client'

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PdfViewerProps {
  title: string
  file: string
}

export default function PdfViewer({ title, file }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  return (
    <AccordionItem value={title}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col items-center">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="flex items-center mt-4">
            <Button
              onClick={() => setPageNumber(pageNumber - 1)}
              disabled={pageNumber <= 1}
            >
              Previous
            </Button>
            <p className="mx-4">
              Page {pageNumber} of {numPages}
            </p>
            <Button
              onClick={() => setPageNumber(pageNumber + 1)}
              disabled={pageNumber >= (numPages || 0)}
            >
              Next
            </Button>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}