import { Search, Calendar, FileText, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FarmerDashboard() {
  const navigate = useNavigate();

  const upcomingRentals = [
    {
      id: 1,
      equipment: 'Mahindra 575 DI Tractor',
      owner: 'Ramesh Kumar',
      startDate: '20 Jan 2026',
      endDate: '22 Jan 2026',
      location: 'Rampur, UP',
      status: 'Confirmed',
    },
    {
      id: 2,
      equipment: 'Seed Drill Machine',
      owner: 'Sunil Verma',
      startDate: '25 Jan 2026',
      endDate: '26 Jan 2026',
      location: 'Meerut, UP',
      status: 'Confirmed',
    },
  ];

  const announcements = [
    {
      id: 1,
      title: 'New Equipment Added',
      description: '15 new harvesters available in your district',
      date: '16 Jan 2026',
    },
    {
      id: 2,
      title: 'Seasonal Discount',
      description: '20% off on tillage equipment this month',
      date: '15 Jan 2026',
    },
    {
      id: 3,
      title: 'Platform Update',
      description: 'New filters added to equipment search',
      date: '12 Jan 2026',
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
        <p className="text-sm text-gray-600 mt-1">Welcome back! Manage your equipment rentals</p>
      </div>

      {/* Quick Search Widget */}
      <div className="bg-white border border-gray-300 rounded-sm p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Equipment Search</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Equipment Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Select Type</option>
              <option value="tractor">Tractor</option>
              <option value="tillage">Tillage Equipment</option>
              <option value="harvesting">Harvesting Equipment</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Required Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={() => navigate('/farmer/search')}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Active Requests</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-800">
              <FileText className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Upcoming Rentals</p>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-800">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total Rentals</p>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 text-purple-800">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Money Saved</p>
              <p className="text-2xl font-semibold text-gray-900">₹1,28,400</p>
            </div>
            <div className="p-3 rounded-full bg-orange-100 text-orange-800">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Rentals */}
      <div className="bg-white border border-gray-300 rounded-sm mb-8">
        <div className="border-b border-gray-300 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">Upcoming Rentals</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
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
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {upcomingRentals.map((rental) => (
                <tr key={rental.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{rental.equipment}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{rental.owner}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{rental.startDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{rental.endDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{rental.location}</td>
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
      </div>

      {/* Notices / Announcements */}
      <div className="bg-white border border-gray-300 rounded-sm">
        <div className="border-b border-gray-300 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">Notices & Announcements</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-1">{announcement.title}</h4>
                  <p className="text-sm text-gray-600">{announcement.description}</p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{announcement.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
