import { User, Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function OwnerProfile() {
  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Profile</h2>
        <p className="text-sm text-gray-600 mt-1">Manage your account information and settings</p>
      </div>

      {/* Profile Information */}
      <div className="bg-white border border-gray-300 rounded-sm mb-6">
        <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
        </div>
        <div className="p-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-12 h-12 text-gray-600" />
            </div>
            <div className="flex-1">
              <button className="px-4 py-2 border border-gray-300 rounded-sm text-sm hover:bg-gray-50">
                Change Photo
              </button>
              <p className="text-xs text-gray-500 mt-2">JPG or PNG. Max size 2MB.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="Ramesh Kumar Sharma"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Owner ID</label>
              <input
                type="text"
                defaultValue="OWN-2024-00234"
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-sm bg-gray-100 text-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  defaultValue="ramesh.sharma@email.com"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  defaultValue="+91 98765 43210"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-2" />
                <input
                  type="text"
                  defaultValue="Village Rampur, District Rampur, Uttar Pradesh - 244901"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6 pt-6 border-t border-gray-200">
            <button className="px-6 py-2 border border-gray-300 rounded-sm text-sm hover:bg-gray-50">
              Cancel
            </button>
            <button className="px-6 py-2 bg-green-600 text-white rounded-sm text-sm hover:bg-green-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Verification Status */}
      <div className="bg-white border border-gray-300 rounded-sm mb-6">
        <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900">Verification Status</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-sm">
              <Shield className="w-6 h-6 text-green-700" />
              <div>
                <p className="text-sm font-medium text-gray-900">Aadhaar Verified</p>
                <p className="text-xs text-gray-600">XXXX XXXX 4567</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-sm">
              <Shield className="w-6 h-6 text-green-700" />
              <div>
                <p className="text-sm font-medium text-gray-900">Phone Verified</p>
                <p className="text-xs text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-sm">
              <Shield className="w-6 h-6 text-green-700" />
              <div>
                <p className="text-sm font-medium text-gray-900">Bank Account Verified</p>
                <p className="text-xs text-gray-600">XXXX XXXX 8901</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-sm">
              <Shield className="w-6 h-6 text-yellow-700" />
              <div>
                <p className="text-sm font-medium text-gray-900">Address Proof Pending</p>
                <p className="text-xs text-gray-600">Upload document</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Statistics */}
      <div className="bg-white border border-gray-300 rounded-sm">
        <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900">Account Statistics</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Member Since</p>
              <p className="text-lg font-semibold text-gray-900">March 2024</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Equipment Listed</p>
              <p className="text-lg font-semibold text-gray-900">12</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Successful Rentals</p>
              <p className="text-lg font-semibold text-gray-900">187</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
