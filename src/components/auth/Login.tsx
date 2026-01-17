import { useNavigate, useSearchParams } from 'react-router-dom';

interface LoginProps {
  setCurrentUser: (role: 'owner' | 'farmer') => void;
}

export default function Login({ setCurrentUser }: LoginProps) {
  const [params] = useSearchParams();
  const role = params.get('role') as 'owner' | 'farmer';
  const navigate = useNavigate();

  const handleLogin = () => {
    setCurrentUser(role);
    navigate(`/${role}/dashboard`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white border border-gray-300 p-8 w-full max-w-md">
        <h2 className="text-lg font-semibold text-center mb-6">
          {role === 'owner' ? 'Equipment Owner Login' : 'Farmer Login'}
        </h2>

        <input
          className="w-full border border-gray-300 px-3 py-2 mb-4"
          placeholder="Mobile or Email"
        />
        <input
          type="password"
          className="w-full border border-gray-300 px-3 py-2 mb-6"
          placeholder="Password"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-2"
        >
          Login
        </button>
      </div>
    </div>
  );
}
