import { Edit, Trash2, Eye } from 'lucide-react';

export default function MyEquipment() {
  const equipmentList = [
    { 
      id: 1, 
      name: 'Mahindra 575 DI Tractor', 
      category: 'Tractor',
      model: '575 DI',
      location: 'Rampur, UP', 
      price: '₹800/day',
      availability: 'Available', 
      status: 'Active',
      totalBookings: 45
    },
    { 
      id: 2, 
      name: 'Rotavator (7 Feet)', 
      category: 'Tillage Equipment',
      model: '7 Feet Standard',
      location: 'Meerut, UP', 
      price: '₹500/day',
      availability: 'Rented', 
      status: 'Active',
      totalBookings: 38
    },
    { 
      id: 3, 
      name: 'Seed Drill Machine', 
      category: 'Seeding Equipment',
      model: '9 Row',
      location: 'Rampur, UP', 
      price: '₹600/day',
      availability: 'Available', 
      status: 'Active',
      totalBookings: 28
    },
    { 
      id: 4, 
      name: 'Harvester Combine', 
      category: 'Harvesting Equipment',
      model: 'Mini Combine',
      location: 'Muzaffarnagar, UP', 
      price: '₹2,500/day',
      availability: 'Rented', 
      status: 'Active',
      totalBookings: 52
    },
    { 
      id: 5, 
      name: 'Potato Planter', 
      category: 'Planting Equipment',
      model: '2 Row Automatic',
      location: 'Rampur, UP', 
      price: '₹700/day',
      availability: 'Available', 
      status: 'Active',
      totalBookings: 19
    },
    { 
      id: 6, 
      name: 'Cultivator (11 Tyne)', 
      category: 'Tillage Equipment',
      model: '11 Tyne Heavy Duty',
      location: 'Rampur, UP', 
      price: '₹450/day',
      availability: 'Available', 
      status: 'Active',
      totalBookings: 31
    },
  ];

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">My Equipment</h2>
          <p className="text-sm text-gray-600 mt-1">Manage your listed agricultural equipment</p>
        </div>
        <div className="text-sm text-gray-700">
          <span className="font-medium">Total Equipment: </span>
          <span className="text-green-700 font-semibold">{equipmentList.length}</span>
        </div>
      </div>

      {/* Equipment Table */}
      <div className="bg-white border border-gray-300 rounded-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Equipment Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Availability
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Total Bookings
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {equipmentList.map((equipment) => (
                <tr key={equipment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{equipment.name}</div>
                      <div className="text-xs text-gray-500">{equipment.model}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{equipment.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{equipment.location}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{equipment.price}</td>
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
                  <td className="px-6 py-4 text-sm text-center text-gray-900">{equipment.totalBookings}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-700 hover:bg-blue-50 rounded border border-blue-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-700 hover:bg-green-50 rounded border border-green-300">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-700 hover:bg-red-50 rounded border border-red-300">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State (if needed) */}
        {equipmentList.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No equipment listed yet.</p>
            <p className="text-sm text-gray-400 mt-1">Add your first equipment to start earning.</p>
          </div>
        )}
      </div>
    </div>
  );
}
