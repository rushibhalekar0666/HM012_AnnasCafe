import { History, Download } from 'lucide-react';

export default function RentalHistory() {
  const rentalHistory = [
    {
      id: 'RNT-2026-189',
      equipment: 'Rotavator (7 Feet)',
      owner: 'Vijay Singh',
      startDate: '10 Jan 2026',
      endDate: '11 Jan 2026',
      duration: '2 days',
      amount: '₹1,000',
      status: 'Completed',
      paymentStatus: 'Paid',
    },
    {
      id: 'RNT-2025-567',
      equipment: 'Seed Drill Machine',
      owner: 'Prakash Yadav',
      startDate: '05 Jan 2026',
      endDate: '06 Jan 2026',
      duration: '2 days',
      amount: '₹1,200',
      status: 'Completed',
      paymentStatus: 'Paid',
    },
    {
      id: 'RNT-2025-534',
      equipment: 'Mahindra 575 DI Tractor',
      owner: 'Ramesh Kumar',
      startDate: '28 Dec 2025',
      endDate: '30 Dec 2025',
      duration: '3 days',
      amount: '₹2,400',
      status: 'Completed',
      paymentStatus: 'Paid',
    },
    {
      id: 'RNT-2025-498',
      equipment: 'Cultivator (11 Tyne)',
      owner: 'Suresh Verma',
      startDate: '20 Dec 2025',
      endDate: '21 Dec 2025',
      duration: '2 days',
      amount: '₹900',
      status: 'Completed',
      paymentStatus: 'Paid',
    },
    {
      id: 'RNT-2025-445',
      equipment: 'Potato Planter',
      owner: 'Ajay Singh',
      startDate: '12 Dec 2025',
      endDate: '14 Dec 2025',
      duration: '3 days',
      amount: '₹2,100',
      status: 'Completed',
      paymentStatus: 'Paid',
    },
  ];

  const totalSpent = rentalHistory.reduce((sum, rental) => {
    const amount = parseInt(rental.amount.replace(/[₹,]/g, ''));
    return sum + amount;
  }, 0);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Rental History</h2>
          <p className="text-sm text-gray-600 mt-1">View your past equipment rentals</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total Rentals</p>
              <p className="text-2xl font-semibold text-gray-900">{rentalHistory.length}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-800">
              <History className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total Spent</p>
              <p className="text-2xl font-semibold text-gray-900">₹{totalSpent.toLocaleString()}</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-800">
              <History className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Average Cost</p>
              <p className="text-2xl font-semibold text-gray-900">
                ₹{Math.round(totalSpent / rentalHistory.length).toLocaleString()}
              </p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 text-purple-800">
              <History className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white border border-gray-300 rounded-sm">
        <div className="border-b border-gray-300 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">Rental Records</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Rental ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Equipment
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  End Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rentalHistory.map((rental) => (
                <tr key={rental.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{rental.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{rental.equipment}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{rental.owner}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{rental.startDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{rental.endDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{rental.duration}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{rental.amount}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex px-3 py-1 text-xs font-medium rounded-sm bg-green-100 text-green-800">
                      {rental.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex px-3 py-1 text-xs font-medium rounded-sm bg-gray-100 text-gray-800">
                      {rental.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {rentalHistory.length === 0 && (
          <div className="text-center py-12">
            <History className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No rental history yet.</p>
            <p className="text-sm text-gray-400 mt-1">Your completed rentals will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
