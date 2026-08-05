import { useNavigate } from "react-router-dom";

function QuickActions() {

  const navigate = useNavigate();

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-5">

        Quick Actions

      </h2>

      <div className="flex gap-4">

        <button
          onClick={()=>navigate("/upload")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          New Reconciliation
        </button>

        <button
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          View History
        </button>

        <button
          className="bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Export Reports
        </button>

      </div>

    </div>

  );

}

export default QuickActions;