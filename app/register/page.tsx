import Link from 'next/link'
import { signup } from '@/app/login/actions'
import { Castle } from 'lucide-react'

export default async function RegisterPage(props: { searchParams: Promise<{ message: string }> }) {
  const searchParams = await props.searchParams;
  const message = searchParams.message;

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-white to-hanashi-accent/30 font-sans p-6">
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-hanashi-accent/50 z-10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-hanashi-accent rounded-full mix-blend-multiply opacity-50 -z-10 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-hanashi-secondary rounded-full mix-blend-multiply opacity-20 -z-10 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="flex flex-col items-center mb-8 relative z-10">
          <Link href="/" className="flex items-center gap-2 mb-8 text-hanashi-dark hover:opacity-80 transition-opacity">
            <Castle className="w-8 h-8" />
            <span className="font-bold text-2xl tracking-tight">
              Hanashi <span className="font-jp text-gray-500 font-normal text-xl">(話し)</span>
            </span>
          </Link>
          <h1 className="text-2xl font-black text-hanashi-dark mb-2">Create an Account</h1>
          <p className="text-gray-500 text-sm font-medium text-center">Start your Japanese learning journey today.</p>
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
            <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="password">Password</label>
            <input
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hanashi-primary/50 focus:border-hanashi-primary transition-all bg-gray-50/50 text-hanashi-dark placeholder:text-gray-400"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required
              minLength={6}
            />
            <p className="text-xs text-gray-500 mt-2">Must be at least 6 characters long.</p>
          </div>
          
          <button
            formAction={signup}
            className="w-full bg-hanashi-primary text-white font-bold py-4 px-4 rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-hanashi-primary/30 mt-2 hover:-translate-y-0.5"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600 font-medium relative z-10">
          Already have an account? <Link href="/login" className="text-hanashi-primary font-bold hover:text-hanashi-primary/80 transition-colors ml-1">Sign in</Link>
        </div>
      </div>
    </div>
  )
}
