import * as XLSX from "xlsx";

export function readExcel(file) {
  const reader = new FileReader();

  reader.onload = (event) => {

    const data = event.target.result;

    const workbook = XLSX.read(data, {
      type: "binary",
    });

    const sheetName = workbook.SheetNames[0];

    const worksheet = workbook.Sheets[sheetName];

    const json = XLSX.utils.sheet_to_json(worksheet);

    console.log(json);

  };

  reader.readAsBinaryString(file);
}