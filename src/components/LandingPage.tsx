import { useNavigate } from 'react-router-dom';
import { Tractor, User, ShieldCheck, IndianRupee, MapPin, Clock } from 'lucide-react';

interface LandingPageProps {
  onRoleSelect: (role: 'owner' | 'farmer') => void;
}

export default function LandingPage({ onRoleSelect }: LandingPageProps) {
  const navigate = useNavigate();

  const handleOwnerLogin = () => {
    onRoleSelect('owner');
    navigate('/owner/dashboard');
  };

  const handleFarmerLogin = () => {
    onRoleSelect('farmer');
    navigate('/farmer/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Platform Header */}
      <header className="bg-white border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-600 rounded-sm flex items-center justify-center">
                <Tractor className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Smart Farm Equipment Sharing Platform
                </h1>
                <p className="text-sm text-gray-600">
                  A digital solution for affordable and accessible agricultural machinery
                </p>
              </div>
            </div>
            <select className="border border-gray-300 px-3 py-2 rounded bg-white text-sm">
              <option>English</option>
              <option>हिन्दी</option>
              <option>தமிழ்</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Connecting Farmers with Agricultural Equipment
          </h2>
          <p className="text-lg text-gray-700">
            Rent, share, and access farm machinery in a transparent and cost-effective way
          </p>
        </div>

        {/* Role Selection */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <button
            onClick={handleOwnerLogin}
            className="bg-white border-2 border-gray-300 hover:border-green-600 p-8 rounded-sm transition-colors"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Equipment Owner
              </h3>
              <p className="text-sm text-gray-600 text-center">
                List your equipment, manage bookings, and earn additional income
              </p>
            </div>
          </button>

          <button
            onClick={handleFarmerLogin}
            className="bg-white border-2 border-gray-300 hover:border-green-600 p-8 rounded-sm transition-colors"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                <Tractor className="w-10 h-10 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Farmer
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Find nearby farm equipment on rent when you need it
              </p>
            </div>
          </button>
        </div>

        {/* Benefits Section */}
        <div className="bg-white border border-gray-300 rounded-sm p-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-8 text-center">
            Why Use This Platform?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <ShieldCheck className="w-8 h-8 text-green-700" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Transparent & Trusted
              </h4>
              <p className="text-sm text-gray-600">
                Verified users, clear pricing, and rating-based trust system
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <IndianRupee className="w-8 h-8 text-blue-700" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Cost Effective
              </h4>
              <p className="text-sm text-gray-600">
                No need to buy expensive equipment — pay only for usage
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <MapPin className="w-8 h-8 text-orange-700" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Nearby Availability
              </h4>
              <p className="text-sm text-gray-600">
                Discover agricultural machinery available near your location
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Clock className="w-8 h-8 text-purple-700" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Timely Access
              </h4>
              <p className="text-sm text-gray-600">
                Book equipment for specific dates and avoid seasonal delays
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">
            © 2026 Smart Farm Equipment Sharing Platform | Built for sustainable agriculture
          </p>
        </div>
      </footer>
    </div>
  );
}
