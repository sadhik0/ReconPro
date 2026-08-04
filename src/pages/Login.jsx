function Login() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <h1 className="text-4xl font-bold text-blue-600">
          ReconPro
        </h1>

        <p className="mt-2 text-gray-600">
          Financial Reconciliation Platform
        </p>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;