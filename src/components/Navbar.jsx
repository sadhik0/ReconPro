import { useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

  const pageName = {
    "/dashboard": "Dashboard",
    "/upload": "Reconciliation",
    "/reports": "Reports",
    "/settings": "Settings",
  };

  return (
    <div className="h-20 bg-white shadow flex justify-between items-center px-10">

      <h2 className="text-2xl font-bold">
        {pageName[location.pathname] || "ReconPro"}
      </h2>

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          S
        </div>

        <div>

          <h3 className="font-semibold">
            Sadhik Salim
          </h3>

          <p className="text-gray-500 text-sm">
            Administrator
          </p>

        </div>

      </div>

    </div>
  );
}

export default Navbar;