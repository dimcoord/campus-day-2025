// import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div id="root"></div>
        <div className="min-h-screen flex flex-col bg-pink-50">
            <div className="flex-grow container mx-auto p-4 mt-12">
                <section className="text-center my-8">
                    <h2 className="text-4xl font-bold text-pink-600">Rundown Acara</h2>
                    <p className="text-lg text-gray-700 mt-4">Linimasa pelaksanaan main event.</p>
                </section>
                <section className="my-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg shadow-lg">
                            <thead className="bg-pink-200">
                                <tr>
                                    <th className="py-2 px-4 text-left text-yellow-600">Waktu</th>
                                    <th className="py-2 px-4 text-left text-yellow-600">Acara</th>
                                    <th className="py-2 px-4 text-left text-yellow-600">Lokasi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-gray-700">9:00 AM - 10:00 AM</td>
                                    <td className="py-2 px-4 text-gray-700">Opening Ceremony</td>
                                    <td className="py-2 px-4 text-gray-700">Main Hall</td>
                                </tr>
                                <tr className="border-b bg-pink-50">
                                    <td className="py-2 px-4 text-gray-700">10:15 AM - 11:00 AM</td>
                                    <td className="py-2 px-4 text-gray-700">Keynote Speech: The Future of Education</td>
                                    <td className="py-2 px-4 text-gray-700">Auditorium</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-gray-700">11:15 AM - 12:00 PM</td>
                                    <td className="py-2 px-4 text-gray-700">Panel Discussion: Choosing the Right College</td>
                                    <td className="py-2 px-4 text-gray-700">Room A</td>
                                </tr>
                                <tr className="border-b bg-pink-50">
                                    <td className="py-2 px-4 text-gray-700">12:00 PM - 1:00 PM</td>
                                    <td className="py-2 px-4 text-gray-700">Lunch Break</td>
                                    <td className="py-2 px-4 text-gray-700">Cafeteria</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-gray-700">1:00 PM - 2:00 PM</td>
                                    <td className="py-2 px-4 text-gray-700">Workshop: Writing a Winning College Essay</td>
                                    <td className="py-2 px-4 text-gray-700">Room B</td>
                                </tr>
                                <tr className="border-b bg-pink-50">
                                    <td className="py-2 px-4 text-gray-700">2:15 PM - 3:00 PM</td>
                                    <td className="py-2 px-4 text-gray-700">Campus Tours</td>
                                    <td className="py-2 px-4 text-gray-700">Various Locations</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4 text-gray-700">3:15 PM - 4:00 PM</td>
                                    <td className="py-2 px-4 text-gray-700">Networking Session</td>
                                    <td className="py-2 px-4 text-gray-700">Exhibition Hall</td>
                                </tr>
                                <tr className="border-b bg-pink-50">
                                    <td className="py-2 px-4 text-gray-700">4:15 PM - 5:00 PM</td>
                                    <td className="py-2 px-4 text-gray-700">Closing Remarks</td>
                                    <td className="py-2 px-4 text-gray-700">Main Hall</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
          </div>
    </main>
  );
}
