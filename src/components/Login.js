import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen bg-slate-900  flex justify-center items-center">
            <div className="bg-slate-800  p-8 rounded-xl shadow-md w-96">
              <div className="flex justify-center">  <h2 className="text-2xl  text-white font-bold mb-6">Login</h2></div>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-800" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-white font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="border border-slate-600 bg-slate-700 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-800" />
                    </div>
                    <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500  text-white m-5 py-2  px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
