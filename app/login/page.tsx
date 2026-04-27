import Link from 'next/link'
import { login } from './actions'
import { Castle } from 'lucide-react'

export default async function LoginPage(props: { searchParams: Promise<{ message: string }> }) {
  const searchParams = await props.searchParams;
  const message = searchParams.message;

  return (
    <div 
      className="min-h-screen flex items-center justify-center font-sans p-6 relative"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/images/sakura-night.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl p-8 md:p-10 rounded-4xl border border-white/20 z-10 relative overflow-hidden shadow-2xl">
        
        <div className="flex flex-col items-center mb-8 relative z-10">
          <Link href="/" className="flex items-center gap-2 mb-8 text-white hover:opacity-80 transition-opacity">
            <Castle className="w-8 h-8 text-pink-400" />
            <span className="font-bold text-2xl tracking-tight">
              Hanashi <span className="font-jp text-pink-300 font-normal text-xl opacity-80">(話し)</span>
            </span>
          </Link>
          <h1 className="text-2xl font-black text-white mb-2">Welcome Back</h1>
          <p className="text-gray-200 text-sm font-medium text-center opacity-80">Sign in to continue your Japanese journey with native speakers.</p>
        </div>

        <form className="flex flex-col gap-5 relative z-10">
          {message && (
            <div className={`p-4 mb-2 text-sm text-center rounded-xl font-medium border backdrop-blur-md ${message.includes('Check') ? 'bg-green-500/20 text-green-200 border-green-500/30' : 'bg-red-500/20 text-red-200 border-red-500/30'}`}>
              {message}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-1.5" htmlFor="email">Email address</label>
            <input
              className="w-full px-4 py-3.5 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all bg-white/5 text-white placeholder:text-gray-400"
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-sm font-semibold text-gray-200" htmlFor="password">Password</label>
              <Link href="#" className="text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors">Forgot?</Link>
            </div>
            <input
              className="w-full px-4 py-3.5 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all bg-white/5 text-white placeholder:text-gray-400"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button
            formAction={login}
            className="w-full bg-pink-600 text-white font-bold py-4 px-4 rounded-xl hover:bg-pink-500 transition-all shadow-lg shadow-pink-600/30 mt-2 hover:-translate-y-0.5"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-200 font-medium relative z-10 opacity-80">
          Don&apos;t have an account? <Link href="/register" className="text-pink-400 font-bold hover:text-pink-300 transition-colors ml-1">Register here</Link>
        </div>
      </div>
    </div>
  )
}
