import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth }  from '../../appwrite/auth-context'

const Login = () => {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isSignUp) {
      const err = await signUp(email, password);
        if (err) setError(err);  else navigate('/'); 
    } 
    else {
      const err = await signIn(email, password);
        if (err) setError(err);  else navigate('/')
    }
  };

  return (
    <div>
    <header className="bg-red-700 text-yellow-200 fixed w-full top-0 left-0 flex flex-col md:flex-row justify-between items-center z-50 py-4 px-8">
      <img 
        id="logopic" 
        className="h-16 w-16 rounded-full" 
        alt="Buns and Burger Logo" 
        src='/images/logo.png'
      />
      <h1 className="text-2xl font-bold">Buns and Burgers</h1>
      </header>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Buns & Burger {isSignUp ? 'Sign Up' : 'Login'}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-xl transition duration-200"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <span
                className="text-orange-500 cursor-pointer"
                onClick={() => setIsSignUp(false)}
              >
                Sign in
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span
                className="text-orange-500 cursor-pointer"
                onClick={() => setIsSignUp(true)}
              >
                Sign up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
