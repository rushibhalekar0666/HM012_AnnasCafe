import { User, Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function FarmerProfile() {
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
                defaultValue="Rajesh Kumar Singh"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Farmer ID</label>
              <input
                type="text"
                defaultValue="FMR-2024-01567"
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
                  defaultValue="rajesh.singh@email.com"
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
                  defaultValue="+91 99876 54321"
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
                  defaultValue="Village Kachla, District Rampur, Uttar Pradesh - 244901"
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

      {/* Farm Details */}
      <div className="bg-white border border-gray-300 rounded-sm mb-6">
        <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900">Farm Details</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Farm Size (acres)</label>
              <input
                type="text"
                defaultValue="15"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Crop</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Select Crop</option>
                <option value="wheat" selected>Wheat</option>
                <option value="rice">Rice</option>
                <option value="sugarcane">Sugarcane</option>
                <option value="potato">Potato</option>
                <option value="vegetables">Vegetables</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Crop</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Select Crop</option>
                <option value="wheat">Wheat</option>
                <option value="rice">Rice</option>
                <option value="sugarcane">Sugarcane</option>
                <option value="potato" selected>Potato</option>
                <option value="vegetables">Vegetables</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Soil Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Select Type</option>
                <option value="alluvial" selected>Alluvial</option>
                <option value="black">Black Soil</option>
                <option value="red">Red Soil</option>
                <option value="laterite">Laterite</option>
              </select>
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
                <p className="text-xs text-gray-600">XXXX XXXX 6789</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-sm">
              <Shield className="w-6 h-6 text-green-700" />
              <div>
                <p className="text-sm font-medium text-gray-900">Phone Verified</p>
                <p className="text-xs text-gray-600">+91 99876 54321</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-sm">
              <Shield className="w-6 h-6 text-green-700" />
              <div>
                <p className="text-sm font-medium text-gray-900">Land Records Verified</p>
                <p className="text-xs text-gray-600">Khata No: 345/2024</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-sm">
              <Shield className="w-6 h-6 text-yellow-700" />
              <div>
                <p className="text-sm font-medium text-gray-900">Bank Account Pending</p>
                <p className="text-xs text-gray-600">Add bank details</p>
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
              <p className="text-lg font-semibold text-gray-900">January 2025</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Rentals</p>
              <p className="text-lg font-semibold text-gray-900">24</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Money Saved</p>
              <p className="text-lg font-semibold text-gray-900">₹1,28,400</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
