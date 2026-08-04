import UploadCard from "../components/UploadCard";
import { readExcel } from "../services/excelReader";

function Upload() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        Upload Files
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <UploadCard
          title="Company Ledger"
          onFileSelect={readExcel}
        />

        <UploadCard
          title="Bank Statement / GST File"
          onFileSelect={readExcel}
        />

      </div>

      <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg">
        Compare Files
      </button>

    </div>
  );
}

export default Upload;