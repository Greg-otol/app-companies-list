import * as XLSX from "xlsx";
import { Button } from "./styleExcelGenerator";
import { ICompany } from "../../interfaces/ICompany";

interface ExcelGeneratorProps {
  data: ICompany[];
}

export const ExcelGenerator: React.FC<ExcelGeneratorProps> = (props) => {
  const { data } = props;

  const currentDate = new Date().toISOString();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDate = `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;

    return formattedDate;
  };

  const handleDownload = () => {
    const columns = [
      { field: "codigo", title: "Código" },
      { field: "cnpj", title: "CNPJ" },
      { field: "razaoSocial", title: "Razão Social" },
      { field: "inscricaoMunicipal", title: "Inscrição Municipal" },
      { field: "dataInclusao", title: "Data de Inclusão" },
      { field: "responsavelLegal", title: "Responsável Legal" },
    ];

    const filteredData = data.map((item) => {
      const filteredItem: Partial<ICompany> = {};
      columns.forEach((col) => {
        if (col.field === "dataInclusao") {
          filteredItem[col.field] = formatDate(item[col.field]);
        } else {
          filteredItem[col.field] = item[col.field];
        }
      });
      return filteredItem;
    });

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(filteredData);

    columns.forEach((col, index) => {
      worksheet[XLSX.utils.encode_cell({ r: 0, c: index })] = { v: col.title };
    });

    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    saveAsExcel(excelBuffer, `relatório_${formatDate(currentDate)}.xlsx`);
  };

  const saveAsExcel = (buffer: any, filename: string) => {
    const dataBlob = new Blob([buffer], { type: "application/octet-stream" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Button onClick={handleDownload}>Gerar Relatório</Button>
    </>
  );
};
