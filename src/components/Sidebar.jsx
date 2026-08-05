import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      icon: "📊",
      path: "/dashboard",
    },
    {
      name: "Reconciliation",
      icon: "📁",
      path: "/upload",
    },
    {
      name: "Reports",
      icon: "📄",
      path: "/reports",
    },
    {
      name: "Settings",
      icon: "⚙",
      path: "/settings",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 flex flex-col">

      <div className="text-3xl font-bold text-center py-8 border-b border-slate-700">
        ReconPro
      </div>

      <nav className="mt-6 flex-1">

        {menu.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={`block px-8 py-4 transition

            ${
              location.pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            {item.icon} {item.name}
          </Link>

        ))}

      </nav>

      <button
        onClick={handleLogout}
        className="m-4 bg-red-600 hover:bg-red-700 rounded-lg py-3"
      >
        🚪 Logout
      </button>

    </div>
  );
}

export default Sidebar;