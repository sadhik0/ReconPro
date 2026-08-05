function RecentActivity() {

  const data = [

    {
      file: "July GST",
      records: 1248,
      match: "96%"
    },

    {
      file: "August GST",
      records: 2134,
      match: "92%"
    }

  ];

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-5">

        Recent Reconciliations

      </h2>

      <table className="w-full">

        <thead>

          <tr>

            <th className="text-left p-2">File</th>

            <th className="text-left p-2">Records</th>

            <th className="text-left p-2">Match</th>

          </tr>

        </thead>

        <tbody>

          {data.map((item, index)=>(

            <tr key={index}>

              <td className="p-2">{item.file}</td>

              <td className="p-2">{item.records}</td>

              <td className="p-2">{item.match}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default RecentActivity;