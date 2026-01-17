import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, Calendar } from 'lucide-react';

export default function EarningsSummary() {
  const monthlyData = [
    { month: 'Jul', earnings: 28500 },
    { month: 'Aug', earnings: 32400 },
    { month: 'Sep', earnings: 35200 },
    { month: 'Oct', earnings: 42100 },
    { month: 'Nov', earnings: 38900 },
    { month: 'Dec', earnings: 41200 },
    { month: 'Jan', earnings: 45600 },
  ];

  const recentTransactions = [
    {
      id: 'TXN-2026-087',
      date: '17 Jan 2026',
      equipment: 'Harvester Combine',
      farmer: 'Vikram Patel',
      amount: '₹2,500',
      status: 'Completed',
    },
    {
      id: 'TXN-2026-086',
      date: '16 Jan 2026',
      equipment: 'Rotavator (7 Feet)',
      farmer: 'Mohan Singh',
      amount: '₹500',
      status: 'Completed',
    },
    {
      id: 'TXN-2026-085',
      date: '15 Jan 2026',
      equipment: 'Seed Drill Machine',
      farmer: 'Ramesh Kumar',
      amount: '₹1,200',
      status: 'Completed',
    },
    {
      id: 'TXN-2026-084',
      date: '14 Jan 2026',
      equipment: 'Mahindra 575 DI Tractor',
      farmer: 'Suresh Yadav',
      amount: '₹3,200',
      status: 'Completed',
    },
    {
      id: 'TXN-2026-083',
      date: '13 Jan 2026',
      equipment: 'Potato Planter',
      farmer: 'Ajay Singh',
      amount: '₹1,400',
      status: 'Pending',
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Earnings Summary</h2>
        <p className="text-sm text-gray-600 mt-1">Track your rental income and transaction history</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total Earnings (All Time)</p>
              <p className="text-2xl font-semibold text-gray-900">₹2,63,900</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-800">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">This Month (January)</p>
              <p className="text-2xl font-semibold text-gray-900">₹45,600</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-800">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Average Monthly</p>
              <p className="text-2xl font-semibold text-gray-900">₹37,671</p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 text-purple-800">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Earnings Chart */}
      <div className="bg-white border border-gray-300 rounded-sm mb-8">
        <div className="border-b border-gray-300 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">Monthly Earnings Trend</h3>
        </div>
        <div className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                }}
              />
              <Bar dataKey="earnings" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white border border-gray-300 rounded-sm">
        <div className="border-b border-gray-300 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Equipment
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Farmer
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
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{transaction.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{transaction.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{transaction.equipment}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{transaction.farmer}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{transaction.amount}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-medium rounded-sm ${
                        transaction.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {transaction.status}
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
