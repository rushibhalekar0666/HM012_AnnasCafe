import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Tractor, Plus, FileText, Calendar, DollarSign, User, LogOut } from 'lucide-react';

export default function OwnerLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const navItems = [
    { path: '/owner/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/owner/equipment', label: 'My Equipment', icon: Tractor },
    { path: '/owner/add-equipment', label: 'Add Equipment', icon: Plus },
    { path: '/owner/booking-requests', label: 'Booking Requests', icon: FileText },
    { path: '/owner/active-rentals', label: 'Active Rentals', icon: Calendar },
    { path: '/owner/earnings', label: 'Earnings Summary', icon: DollarSign },
    { path: '/owner/profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-300">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-sm flex items-center justify-center">
              <Tractor className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Smart Agricultural Equipment Sharing Portal</h1>
              <p className="text-xs text-gray-600">Equipment Owner Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 px-4 py-2 rounded-sm border border-blue-200">
              <span className="text-sm font-medium text-blue-900">Role: Equipment Owner</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm hover:bg-gray-100 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-300 min-h-[calc(100vh-73px)]">
          <nav className="p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-sm text-sm transition-colors ${
                        isActive
                          ? 'bg-green-50 text-green-800 border-l-4 border-green-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
