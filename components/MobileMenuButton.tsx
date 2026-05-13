"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";

export default function MobileMenuButton({
  isLoggedIn,
}: {
  isLoggedIn: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-hanashi-dark transition-colors hover:bg-gray-100"
        aria-label="Toggle menu"
        type="button"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 flex flex-col gap-3 border-b border-gray-100 bg-white px-6 py-4 shadow-lg">
          <Link
            href="/"
            onClick={closeMenu}
            className="border-b border-gray-50 py-3 text-sm font-bold text-gray-600 transition-colors hover:text-hanashi-primary"
          >
            Home
          </Link>

          <Link
            href="#features"
            onClick={closeMenu}
            className="border-b border-gray-50 py-3 text-sm font-bold text-gray-600 transition-colors hover:text-hanashi-primary"
          >
            Features
          </Link>

          <div className="flex flex-col gap-3 pt-2">
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={closeMenu}
                  className="py-3 text-center text-sm font-bold text-hanashi-primary"
                >
                  Dashboard
                </Link>

                <Link
                  href="/profile"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-xl bg-hanashi-secondary px-6 py-3 text-sm font-bold text-white"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="py-3 text-center text-sm font-bold text-hanashi-primary"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={closeMenu}
                  className="rounded-xl bg-hanashi-secondary px-6 py-3 text-center text-sm font-bold text-white"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}