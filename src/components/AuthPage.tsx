import { useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => setIsLogin(!isLogin);

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="m-auto w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {isLogin
                ? "Sign in to access your account"
                : "Register to create your account"}
            </p>
          </div>

          <div className="space-y-5">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 pl-12 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 pl-12 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 pl-12 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </div>

            {!isLogin && (
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 pl-12 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>
            )}

            {isLogin ? (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-500">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Forgot password?
                </a>
              </div>
            ) : (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-500">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    Terms of Service
                  </a>
                </span>
              </div>
            )}

            <button className="group relative flex w-full items-center justify-center rounded-lg bg-blue-600 p-4 text-sm font-medium text-white transition hover:bg-blue-700">
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="absolute right-4 h-5 w-5 opacity-0 transition group-hover:opacity-100" />
            </button>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6 text-center">
            <p className="text-sm text-gray-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={toggleAuth}
                className="font-medium text-blue-600 hover:text-blue-800"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
