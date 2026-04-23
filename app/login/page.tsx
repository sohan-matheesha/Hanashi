import Link from 'next/link'
import { login } from './actions'
import { Castle } from 'lucide-react'

export default async function LoginPage(props: { searchParams: Promise<{ message: string }> }) {
  const searchParams = await props.searchParams;
  const message = searchParams.message;

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-white to-hanashi-accent/30 font-sans p-6">
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-hanashi-accent/50 z-10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-hanashi-accent rounded-full mix-blend-multiply opacity-60 -z-10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-hanashi-secondary rounded-full mix-blend-multiply opacity-20 -z-10 blur-3xl"></div>
        
        <div className="flex flex-col items-center mb-8 relative z-10">
          <Link href="/" className="flex items-center gap-2 mb-8 text-hanashi-dark hover:opacity-80 transition-opacity">
            <Castle className="w-8 h-8" />
            <span className="font-bold text-2xl tracking-tight">
              Hanashi <span className="font-jp text-gray-500 font-normal text-xl">(話し)</span>
            </span>
          </Link>
          <h1 className="text-2xl font-black text-hanashi-dark mb-2">Welcome Back</h1>
          <p className="text-gray-500 text-sm font-medium text-center">Sign in to continue your Japanese journey with native speakers.</p>
        </div>

        <form className="flex flex-col gap-5 relative z-10">
          {message && (
            <div className={`p-4 mb-2 text-sm text-center rounded-xl font-medium border ${message.includes('Check') ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
              {message}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">Email address</label>
            <input
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hanashi-primary/50 focus:border-hanashi-primary transition-all bg-gray-50/50 text-hanashi-dark placeholder:text-gray-400"
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-sm font-semibold text-gray-700" htmlFor="password">Password</label>
              <Link href="#" className="text-xs font-bold text-hanashi-primary hover:text-hanashi-primary/80 transition-colors">Forgot?</Link>
            </div>
            <input
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hanashi-primary/50 focus:border-hanashi-primary transition-all bg-gray-50/50 text-hanashi-dark placeholder:text-gray-400"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button
            formAction={login}
            className="w-full bg-hanashi-primary text-white font-bold py-4 px-4 rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-hanashi-primary/30 mt-2 hover:-translate-y-0.5"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600 font-medium relative z-10">
          Don&apos;t have an account? <Link href="/register" className="text-hanashi-primary font-bold hover:text-hanashi-primary/80 transition-colors ml-1">Register here</Link>
        </div>
      </div>
    </div>
  )
}
