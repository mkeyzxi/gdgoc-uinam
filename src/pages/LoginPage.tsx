import { TypographyH2 } from "@/components/ui/typographyh2";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { Navigate } from "react-router-dom";
import { useAuth } from "../lib/useAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("LOGIN SUKSES:", res.user.email);
    } catch (err) {
      console.error("LOGIN ERROR:", err);
    }
  };


  if (user) {
    return <Navigate to="/addActivity" replace />
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500/20 via-green-400/10 to-green-600/20 p-6">
      <section className="w-full max-w-md bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-green-500/30">
        <TypographyH2 className="text-center text-green-600 mb-6">Login Page</TypographyH2>

        <form className="flex flex-col space-y-5" onSubmit={login}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-green-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              className="px-4 py-3 rounded-xl border border-green-500/50 focus:border-green-500 focus:ring-2 focus:ring-green-500/50 outline-none transition-all duration-300"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-green-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              className="px-4 py-3 rounded-xl border border-green-500/50 focus:border-green-500 focus:ring-2 focus:ring-green-500/50 outline-none transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="mt-6 py-3 px-4 rounded-xl font-semibold text-white bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
