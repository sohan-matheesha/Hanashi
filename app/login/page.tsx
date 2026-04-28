import Link from 'next/link'
import { login } from './actions'
import { Castle, Mail, Lock, Eye } from 'lucide-react'

export default async function LoginPage(props: { searchParams: Promise<{ message: string }> }) {
  const searchParams = await props.searchParams;
  const message = searchParams.message;

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans text-[#2d2a32]">
      <div className="max-w-5xl w-full bg-white rounded-4xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[650px] relative z-10">
        
        {/* Left Image Panel */}
        <div
          className="relative hidden min-h-[650px] md:block md:w-[45%]"
          style={{
            backgroundImage: "url('/images/login-japanese-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-[#c96c9a]/30 to-[#8d4f87]/20" />

          <div className="absolute inset-x-0 top-0 p-12">
            <h2 className="max-w-[260px] text-[2.5rem] font-bold leading-[1.1] text-white drop-shadow-sm tracking-tight">
              Master the art of language.
            </h2>

            <p className="mt-6 max-w-[280px] text-[15px] leading-relaxed text-white/90">
              Learn Japanese in the most elegant and effective way with Hanashi.
            </p>
          </div>

          <div className="absolute bottom-12 left-12 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-pink-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex w-full items-center justify-center bg-white px-6 py-10 sm:px-10 md:w-[55%] md:px-12">
          <div className="w-full max-w-[380px]">
            {/* Logo */}
            <div className="mb-10 flex items-center gap-3">
              <span className="text-3xl font-bold text-[#f06428]">⛩</span>
              <h1 className="text-2xl font-bold text-[#111827]">
                Hanashi <span className="text-[#6b7280]">(話し)</span>
              </h1>
            </div>
            
            <h2 className="text-[2.2rem] font-bold tracking-tight text-[#0f172a] mb-2">Welcome Back</h2>
            <p className="text-sm text-[#667085] mb-8">
              Sign in to continue your Japanese learning journey.
            </p>

            <form className="flex flex-col gap-5 w-full">
              {message && (
                <div className={`p-3 mb-2 text-sm text-center rounded-xl font-medium border ${message.includes('Check') ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-600 border-red-200'}`}>
                  {message}
                </div>
              )}

              <div>
                <label className="block text-[14px] font-semibold text-[#1f2937] mb-2" htmlFor="email">
                  Email address
                </label>
                <div className="flex h-12 items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white px-4 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400 transition-all">
                  <Mail className="h-5 w-5 text-[#667085]" />
                  <input
                    className="w-full bg-transparent text-[15px] text-[#111827] outline-none placeholder:text-[#98a2b3]"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#1f2937] mb-2" htmlFor="password">
                  Password
                </label>
                <div className="flex h-12 items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white px-4 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400 transition-all relative">
                  <Lock className="h-5 w-5 text-[#667085]" />
                  <input
                    className="w-full bg-transparent text-[15px] text-[#111827] outline-none placeholder:text-[#98a2b3] pr-8"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-[#98a2b3] hover:text-[#667085] transition-colors">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer appearance-none w-4 h-4 border border-gray-300 rounded-[4px] checked:bg-[#e34288] checked:border-[#e34288] transition-all cursor-pointer" />
                    <svg className="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none">
                      <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[13px] text-[#667085] font-medium group-hover:text-gray-700 transition-colors">Remember me</span>
                </label>
                <Link href="#" className="text-[13px] font-medium text-[#667085] hover:text-[#e34288] transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                formAction={login}
                className="w-full bg-[#ec4899] text-white text-[15px] font-semibold py-3.5 px-4 rounded-xl hover:bg-[#db2777] transition-colors shadow-md mt-2"
              >
                Sign In
              </button>
            </form>

            <div className="w-full mt-8">
              <div className="relative flex items-center justify-center mb-8">
                <div className="absolute inset-x-0 h-px bg-[#e5e7eb]"></div>
                <span className="relative bg-white px-4 text-[12px] font-medium text-[#98a2b3] tracking-widest uppercase">OR</span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-10">
                <button className="flex-1 h-12 rounded-xl border border-[#e5e7eb] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-[13px] font-semibold text-[#374151]">Continue with Google</span>
                </button>
                <button className="flex-1 h-12 rounded-xl border border-[#e5e7eb] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                  </svg>
                  <span className="text-[13px] font-semibold text-[#374151]">Continue with Facebook</span>
                </button>
              </div>

              <div className="text-center text-[14px] text-[#667085] font-medium">
                Don&apos;t have an account? <Link href="/register" className="text-[#ec4899] font-bold hover:text-[#db2777] transition-colors ml-1">Sign up</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
