import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

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

      </div>

    </div>
  );
}

export default Dashboard;