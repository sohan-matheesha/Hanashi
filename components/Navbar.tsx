import Link from "next/link";
import { Castle, User } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import MobileMenuButton from "./MobileMenuButton";

export default async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-white/85 px-4 shadow-sm backdrop-blur-md md:h-20 md:px-12">
      {/* Logo */}
      <Link href="/" className="flex shrink-0 items-center gap-2">
        <Castle className="h-5 w-5 text-hanashi-primary" />
        <span className="text-lg font-extrabold tracking-tight text-hanashi-primary md:text-xl">
          Hanashi{" "}
          <span className="hidden text-base font-medium text-hanashi-primary/80 opacity-80 sm:inline md:text-lg">
            (話し)
          </span>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[13px] font-bold uppercase tracking-wider text-gray-800 md:flex">
        <Link href="/" className="transition-colors hover:text-hanashi-primary">
          Home
        </Link>

        <Link
          href="#features"
          className="transition-colors hover:text-hanashi-primary"
        >
          Features
        </Link>
      </div>

      {/* Auth Buttons - Desktop */}
      <div className="hidden items-center gap-5 text-[13px] font-bold uppercase tracking-wider md:flex">
        {user ? (
          <>
            <Link
              href="/dashboard"
              className="text-hanashi-primary transition-colors hover:text-hanashi-secondary"
            >
              Dashboard
            </Link>

            <Link
              href="/profile"
              className="flex items-center gap-2 rounded-xl bg-hanashi-secondary px-5 py-2.5 text-sm font-semibold normal-case tracking-normal text-white shadow-sm transition hover:bg-opacity-90"
            >
              <User className="h-4 w-4" />
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="text-hanashi-primary transition-colors hover:text-hanashi-secondary"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="whitespace-nowrap rounded-xl bg-hanashi-secondary px-5 py-2.5 text-sm font-semibold normal-case tracking-normal text-white shadow-sm transition hover:bg-opacity-90"
            >
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <MobileMenuButton isLoggedIn={!!user} />
    </nav>
  );
}