function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 shadow-lg">

      <div className="text-3xl font-bold text-center py-8 border-b border-slate-700">
        ReconPro
      </div>

      <nav className="mt-8">

        <button className="w-full text-left px-8 py-4 hover:bg-slate-800 transition">
          📊 Dashboard
        </button>

        <button className="w-full text-left px-8 py-4 hover:bg-slate-800 transition">
          📁 Reconciliation
        </button>

        <button className="w-full text-left px-8 py-4 hover:bg-slate-800 transition">
          📄 Reports
        </button>

        <button className="w-full text-left px-8 py-4 hover:bg-slate-800 transition">
          ⚙ Settings
        </button>

      </nav>

    </div>
  );
}

export default Sidebar;