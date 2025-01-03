/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function Home() {
  const fetchAlumni = async () => {
    const res = await fetch("http://localhost:3000/api/alumni")
    const alumni = await res.json()
    return alumni
  }

  const alumni = await fetchAlumni()

  return (
    <main>
      <div id="root"></div>
        <div className="min-h-screen flex flex-col bg-pink-50">
            <div className="flex-grow container mx-auto p-4 mt-12">
                <section className="text-center my-8">
                    <h2 className="text-4xl font-bold text-pink-600">Persebaran Alumni</h2>
                    <p className="text-lg text-gray-700 mt-4">Persebaran alumni SMAN 24 Bandung di seluruh perguruan tinggi Indonesia.</p>
                </section>
                <section className="my-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg shadow-lg">
                            <thead className="bg-pink-200">
                                <tr>
                                    <th className="py-2 px-4 text-left text-yellow-600">Nama</th>
                                    <th className="py-2 px-4 text-left text-yellow-600">Perguruan Tinggi</th>
                                    <th className="py-2 px-4 text-left text-yellow-600">Fakultas - Program Studi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alumni.map((alumnus: any) => (
                                    <><tr key={alumnus._id} className="border-b">
                                        <td className="py-2 px-4 text-gray-700">{alumnus.nama}</td>
                                        <td className="py-2 px-4 text-gray-700">{alumnus.pt}</td>
                                        <td className="py-2 px-4 text-gray-700">{alumnus.f_prodi}</td>
                                    </tr></>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
          </div>
    </main>
  );
}
