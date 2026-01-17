import { useState } from 'react';
import { Check, X, User, Calendar, MapPin } from 'lucide-react';

export default function BookingRequests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      farmerName: 'Rajesh Kumar',
      farmerPhone: '+91 98765 43210',
      equipment: 'Mahindra 575 DI Tractor',
      requestDate: '15 Jan 2026',
      startDate: '20 Jan 2026',
      endDate: '22 Jan 2026',
      duration: '3 days',
      location: 'Rampur, UP',
      status: 'pending',
    },
    {
      id: 2,
      farmerName: 'Suresh Sharma',
      farmerPhone: '+91 98123 45678',
      equipment: 'Seed Drill Machine',
      requestDate: '16 Jan 2026',
      startDate: '18 Jan 2026',
      endDate: '19 Jan 2026',
      duration: '2 days',
      location: 'Meerut, UP',
      status: 'pending',
    },
    {
      id: 3,
      farmerName: 'Amit Verma',
      farmerPhone: '+91 97654 32109',
      equipment: 'Potato Planter',
      requestDate: '16 Jan 2026',
      startDate: '25 Jan 2026',
      endDate: '26 Jan 2026',
      duration: '2 days',
      location: 'Rampur, UP',
      status: 'pending',
    },
    {
      id: 4,
      farmerName: 'Ramesh Yadav',
      farmerPhone: '+91 99876 54321',
      equipment: 'Cultivator (11 Tyne)',
      requestDate: '17 Jan 2026',
      startDate: '21 Jan 2026',
      endDate: '23 Jan 2026',
      duration: '3 days',
      location: 'Rampur, UP',
      status: 'pending',
    },
  ]);

  const handleApprove = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'approved' } : req
    ));
  };

  const handleReject = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'rejected' } : req
    ));
  };

  const pendingRequests = requests.filter(req => req.status === 'pending');

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Booking Requests</h2>
        <p className="text-sm text-gray-600 mt-1">Review and manage rental requests from farmers</p>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 mb-6">
        <p className="text-sm text-blue-900">
          <span className="font-semibold">{pendingRequests.length}</span> pending request(s) awaiting your action
        </p>
      </div>

      {/* Requests Table */}
      <div className="bg-white border border-gray-300 rounded-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Farmer Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Equipment
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Requested Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Rental Period
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{request.farmerName}</div>
                        <div className="text-xs text-gray-500">{request.farmerPhone}</div>
                        <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {request.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{request.equipment}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{request.requestDate}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{request.startDate}</div>
                    <div className="text-xs text-gray-500">to {request.endDate}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{request.duration}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-medium rounded-sm ${
                        request.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : request.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {request.status === 'pending' ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleApprove(request.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-sm hover:bg-green-700 text-xs"
                        >
                          <Check className="w-3 h-3" />
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(request.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white rounded-sm hover:bg-red-700 text-xs"
                        >
                          <X className="w-3 h-3" />
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-500">Action completed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {requests.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No booking requests at the moment.</p>
            <p className="text-sm text-gray-400 mt-1">Requests from farmers will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
