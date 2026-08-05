import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (

    <div className="h-20 bg-white border-b shadow-sm flex items-center justify-between px-10">

      <div>

        <h2 className="text-2xl font-bold">

          Dashboard

        </h2>

        <p className="text-gray-500 text-sm">

          Welcome back to ReconPro

        </p>

      </div>

      <div className="flex items-center gap-6">

        <button
          onClick={() => navigate("/upload")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          + New Reconciliation
        </button>

        <button className="text-2xl">

          🔔

        </button>

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">

            S

          </div>

          <div>

            <p className="font-semibold">

              Sadhik Salim

            </p>

            <p className="text-xs text-gray-500">

              Administrator

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Navbar;