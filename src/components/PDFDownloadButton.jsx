import PDFComponent from "./PDFComponent";
import ReactPDF from "@react-pdf/renderer";
import { PDFViewer, Document, Page, Text } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

const PDFDownloadButton = ({ data }) => {
  //console.log(data);
  const handleDownload = () => {
    const pdfContent = <PDFComponent data={data} />;
    console.log("this is the content", pdfContent);
    // const blob = new Blob([pdfContent], { type: "application/pdf" });
    // saveAs(blob, "data.pdf");
    const downloadPDF = () => {
      // Convert the `pdfContent` to a Blob object
      const pdfBlob = new Blob([pdfContent], { type: "application/pdf" });

      // Save the Blob object as a PDF file
      saveAs(pdfBlob, "document.pdf");
    };

    // Trigger the download
    downloadPDF();

    //ReactPDF.render(pdfContent, `example.pdf`);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};
export default PDFDownloadButton;
