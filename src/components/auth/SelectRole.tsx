import { useNavigate } from 'react-router-dom';
import { Tractor, User } from 'lucide-react';

export default function SelectRole() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white border border-gray-300 p-10 w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">
          Select User Type
        </h2>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/login?role=owner')}
            className="w-full border border-gray-300 p-4 text-left hover:border-green-600 flex items-center gap-3"
          >
            <User className="w-5 h-5 text-gray-700" />
            <span className="text-sm text-gray-800">
              Equipment Owner
            </span>
          </button>

          <button
            onClick={() => navigate('/login?role=farmer')}
            className="w-full border border-gray-300 p-4 text-left hover:border-green-600 flex items-center gap-3"
          >
            <Tractor className="w-5 h-5 text-gray-700" />
            <span className="text-sm text-gray-800">
              Farmer
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
