import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Signup() {
  const [params] = useSearchParams();
  const role = params.get('role');
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate(`/${role}/dashboard`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white border border-gray-300 p-10 w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">
          {role === 'owner' ? 'Equipment Owner Registration' : 'Farmer Registration'}
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 px-3 py-2 text-sm"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full border border-gray-300 px-3 py-2 text-sm"
          />

          <input
            type="password"
            placeholder="Create Password"
            className="w-full border border-gray-300 px-3 py-2 text-sm"
          />

          <button
            type="button"
            onClick={handleSignup}
            className="w-full bg-green-600 text-white py-2 text-sm"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already registered?{' '}
          <button
            onClick={() => navigate(`/login?role=${role}`)}
            className="text-green-700 underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}
