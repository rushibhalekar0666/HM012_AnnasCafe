import { Tractor, Calendar, DollarSign, TrendingUp } from 'lucide-react';

export default function OwnerDashboard() {
  const summaryData = [
    { label: 'Total Equipment Listed', value: '12', icon: Tractor, color: 'green' },
    { label: 'Active Bookings', value: '8', icon: Calendar, color: 'blue' },
    { label: 'Monthly Earnings', value: '₹45,600', icon: DollarSign, color: 'orange' },
    { label: 'Equipment Utilization', value: '67%', icon: TrendingUp, color: 'purple' },
  ];

  const equipmentData = [
    { id: 1, name: 'Mahindra 575 DI Tractor', location: 'Rampur, UP', availability: 'Available', status: 'Active' },
    { id: 2, name: 'Rotavator (7 Feet)', location: 'Meerut, UP', availability: 'Rented', status: 'Active' },
    { id: 3, name: 'Seed Drill Machine', location: 'Rampur, UP', availability: 'Available', status: 'Active' },
    { id: 4, name: 'Harvester Combine', location: 'Muzaffarnagar, UP', availability: 'Rented', status: 'Active' },
    { id: 5, name: 'Potato Planter', location: 'Rampur, UP', availability: 'Available', status: 'Active' },
  ];

  const colorClasses = {
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    orange: 'bg-orange-100 text-orange-800',
    purple: 'bg-purple-100 text-purple-800',
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
        <p className="text-sm text-gray-600 mt-1">Overview of your equipment and rentals</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">{item.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              </div>
              <div className={`p-3 rounded-full ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                <item.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Equipment Table */}
      <div className="bg-white border border-gray-300 rounded-sm">
        <div className="border-b border-gray-300 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">My Equipment Status</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Equipment Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Availability
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {equipmentData.map((equipment) => (
                <tr key={equipment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{equipment.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{equipment.location}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-medium rounded-sm ${
                        equipment.availability === 'Available'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {equipment.availability}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex px-3 py-1 text-xs font-medium rounded-sm bg-blue-100 text-blue-800">
                      {equipment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
