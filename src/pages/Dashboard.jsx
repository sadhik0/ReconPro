import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import UploadCard from "../components/UploadCard";
import { readExcel } from "../services/excelReader";

function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="ml-64">

        <Navbar />

        <div className="p-10">

          <h1 className="text-4xl font-bold">
            Welcome to ReconPro
          </h1>

          <p className="mt-3 text-gray-600">
            AI-powered Financial Reconciliation Platform
          </p>
          <div className="grid grid-cols-2 gap-6 mt-10">

  <StatCard
    title="Matched Entries"
    value="0"
    color="border-green-500"
  />

  <StatCard
    title="Missing Entries"
    value="0"
    color="border-red-500"
  />

  <StatCard
    title="Duplicates"
    value="0"
    color="border-yellow-500"
  />

  <StatCard
    title="Difference"
    value="₹0"
    color="border-blue-500"
  />

</div>

</div>

<div className="grid grid-cols-2 gap-6 mt-10">

  <UploadCard
    title="Company Ledger"
    onFileSelect={readExcel}
  />

  <UploadCard
    title="Bank Statement / GST File"
    onFileSelect={readExcel}
  />

</div>

<div className="mt-8">

  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
    Compare Files
  </button>

</div>

        </div>

      </div>
  );
}

export default Dashboard;