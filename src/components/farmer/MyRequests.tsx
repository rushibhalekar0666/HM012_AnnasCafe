import { FileText, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function MyRequests() {
  const requests = [
    {
      id: 'REQ-2026-015',
      equipment: 'Mahindra 575 DI Tractor',
      owner: 'Ramesh Kumar',
      requestDate: '17 Jan 2026',
      startDate: '20 Jan 2026',
      endDate: '22 Jan 2026',
      duration: '3 days',
      amount: '₹2,400',
      status: 'Approved',
    },
    {
      id: 'REQ-2026-016',
      equipment: 'Seed Drill Machine',
      owner: 'Sunil Verma',
      requestDate: '17 Jan 2026',
      startDate: '25 Jan 2026',
      endDate: '26 Jan 2026',
      duration: '2 days',
      amount: '₹1,200',
      status: 'Pending',
    },
    {
      id: 'REQ-2026-017',
      equipment: 'Rotavator (7 Feet)',
      owner: 'Vijay Singh',
      requestDate: '16 Jan 2026',
      startDate: '19 Jan 2026',
      endDate: '20 Jan 2026',
      duration: '2 days',
      amount: '₹1,000',
      status: 'Pending',
    },
    {
      id: 'REQ-2026-014',
      equipment: 'Harvester Combine',
      owner: 'Rajesh Sharma',
      requestDate: '15 Jan 2026',
      startDate: '18 Jan 2026',
      endDate: '19 Jan 2026',
      duration: '2 days',
      amount: '₹5,000',
      status: 'Rejected',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-4 h-4" />;
      case 'Pending':
        return <Clock className="w-4 h-4" />;
      case 'Rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const pendingCount = requests.filter(r => r.status === 'Pending').length;
  const approvedCount = requests.filter(r => r.status === 'Approved').length;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">My Requests</h2>
        <p className="text-sm text-gray-600 mt-1">Track your equipment rental requests</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total Requests</p>
              <p className="text-2xl font-semibold text-gray-900">{requests.length}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-800">
              <FileText className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Pending Approval</p>
              <p className="text-2xl font-semibold text-gray-900">{pendingCount}</p>
            </div>
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-800">
              <Clock className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Approved</p>
              <p className="text-2xl font-semibold text-gray-900">{approvedCount}</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-800">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Requests Table */}
      <div className="bg-white border border-gray-300 rounded-sm">
        <div className="border-b border-gray-300 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">All Requests</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Request ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Equipment
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Request Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Rental Period
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Duration
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
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{request.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{request.equipment}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{request.owner}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{request.requestDate}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{request.startDate}</div>
                    <div className="text-xs text-gray-500">to {request.endDate}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{request.duration}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{request.amount}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-sm ${getStatusColor(
                        request.status
                      )}`}
                    >
                      {getStatusIcon(request.status)}
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {requests.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No requests yet.</p>
            <p className="text-sm text-gray-400 mt-1">Search for equipment and submit a booking request.</p>
          </div>
        )}
      </div>

      {/* Status Legend */}
      <div className="bg-gray-50 border border-gray-300 rounded-sm p-4 mt-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Status Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-700" />
            <span className="text-gray-700"><strong>Pending:</strong> Awaiting owner approval</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-700" />
            <span className="text-gray-700"><strong>Approved:</strong> Request confirmed</span>
          </div>
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-red-700" />
            <span className="text-gray-700"><strong>Rejected:</strong> Request declined</span>
          </div>
        </div>
      </div>
    </div>
  );
}
