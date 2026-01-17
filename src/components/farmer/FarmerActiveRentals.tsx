import { User, Phone, MapPin, Calendar } from 'lucide-react';

export default function FarmerActiveRentals() {
  const activeRentals = [
    {
      id: 'RNT-2026-234',
      equipment: 'Mahindra 575 DI Tractor',
      owner: 'Ramesh Kumar',
      ownerPhone: '+91 98765 43210',
      location: 'Rampur, UP',
      startDate: '20 Jan 2026',
      endDate: '22 Jan 2026',
      remainingDays: 3,
      status: 'Active',
      amount: '₹2,400',
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Active Rentals</h2>
        <p className="text-sm text-gray-600 mt-1">Your currently active equipment rentals</p>
      </div>

      {/* Summary Card */}
      {activeRentals.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-sm p-4 mb-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-green-900">
              <span className="font-semibold">{activeRentals.length}</span> active rental(s)
            </p>
            <p className="text-sm text-green-900">
              Total Value: <span className="font-semibold">₹2,400</span>
            </p>
          </div>
        </div>
      )}

      {/* Active Rentals Table */}
      <div className="bg-white border border-gray-300 rounded-sm">
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
                  Owner Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  End Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Days Remaining
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activeRentals.map((rental) => (
                <tr key={rental.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{rental.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{rental.equipment}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{rental.owner}</div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                          <Phone className="w-3 h-3" />
                          {rental.ownerPhone}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          {rental.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{rental.startDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{rental.endDate}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex px-3 py-1 text-xs font-medium rounded-sm bg-blue-100 text-blue-800">
                      {rental.remainingDays} day(s)
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{rental.amount}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex px-3 py-1 text-xs font-medium rounded-sm bg-green-100 text-green-800">
                      {rental.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {activeRentals.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No active rentals at the moment.</p>
            <p className="text-sm text-gray-400 mt-1">Your approved bookings will appear here.</p>
          </div>
        )}
      </div>

      {/* Important Notes */}
      <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 mt-6">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">Important Information</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Please contact the owner at least 1 day before the scheduled rental date</li>
          <li>• Ensure you return the equipment on time to avoid additional charges</li>
          <li>• In case of any issues, immediately contact the owner or platform support</li>
        </ul>
      </div>
    </div>
  );
}
