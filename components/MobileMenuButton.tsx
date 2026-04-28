'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, User } from 'lucide-react'

export default function MobileMenuButton({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center rounded-xl text-hanashi-dark hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200 z-50">
          <Link
            href="#features"
            onClick={() => setIsOpen(false)}
            className="py-3 font-bold text-sm text-gray-600 hover:text-hanashi-primary transition-colors border-b border-gray-50"
          >
            Features
          </Link>
          <Link
            href="#lessons"
            onClick={() => setIsOpen(false)}
            className="py-3 font-bold text-sm text-gray-600 hover:text-hanashi-primary transition-colors border-b border-gray-50"
          >
            Lessons
          </Link>
          <Link
            href="#culture"
            onClick={() => setIsOpen(false)}
            className="py-3 font-bold text-sm text-gray-600 hover:text-hanashi-primary transition-colors border-b border-gray-50"
          >
            Culture
          </Link>

          <div className="flex flex-col gap-3 pt-2">
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-center font-bold text-sm text-hanashi-primary"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-hanashi-secondary text-white px-6 py-3 rounded-xl font-bold text-sm"
                >
                  <User className="w-4 h-4" />
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-center font-bold text-sm text-hanashi-primary"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="bg-hanashi-secondary text-white px-6 py-3 rounded-xl font-bold text-sm text-center"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
