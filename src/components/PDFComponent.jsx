import ReactPDF from "@react-pdf/renderer";
import { PDFViewer, Document, Page, Text } from "@react-pdf/renderer";

const PDFComponent = ({ data }) => (
  <Document className="w-[100rem] h-full">
    <Page>
      {data.map((row, index) => (
        <Text key={index}>{Object.values(row).join("\t")}</Text>
      ))}
    </Page>
  </Document>
);

export default PDFComponent;
