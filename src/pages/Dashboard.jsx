import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import DashboardCard from "../components/DashboardCard";
import DashboardChart from "../components/DashboardChart";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";

function Dashboard() {

  return (

    <div className="bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="ml-64">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold">

            Dashboard

          </h1>

          <p className="text-gray-500 mb-8">

            Welcome to ReconPro

          </p>

          <div className="grid grid-cols-4 gap-6">

            <DashboardCard
              title="Total Uploads"
              value="18"
              color="text-blue-600"
            />

            <DashboardCard
              title="Records"
              value="25,482"
              color="text-green-600"
            />

            <DashboardCard
              title="Match %"
              value="96%"
              color="text-yellow-500"
            />

            <DashboardCard
              title="Needs Review"
              value="214"
              color="text-red-600"
            />

          </div>

          <div className="mt-8">

            <DashboardChart />

          </div>

          <div className="mt-8">

            <RecentActivity />

          </div>

          <div className="mt-8">

            <QuickActions />

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;