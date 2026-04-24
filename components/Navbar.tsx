import Link from "next/link";
import { Castle, User } from "lucide-react"; 
import { createClient } from "@/utils/supabase/server";
import MobileMenuButton from "./MobileMenuButton";

export default async function Navbar() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <nav className="w-full h-16 md:h-24 px-4 md:px-12 flex items-center justify-between bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 shrink-0">
        <Castle className="w-5 h-5 text-hanashi-primary" />
        <span className="font-extrabold text-lg md:text-xl text-hanashi-primary tracking-tight">
          Hanashi <span className="font-jp font-medium text-hanashi-primary/80 opacity-80 text-base md:text-lg hidden sm:inline">(話し)</span>
        </span>
      </div>

      {/* Nav Links - Desktop only */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 font-bold text-[13px] tracking-wider uppercase text-black">
        <Link href="#features" className="hover:text-hanashi-primary transition-colors">
          Features
        </Link>
        <Link href="#lessons" className="hover:text-hanashi-primary transition-colors">
          Lessons
        </Link>
        <Link href="#culture" className="hover:text-hanashi-primary transition-colors">
          Culture
        </Link>
      </div>

      {/* Auth Buttons - Desktop */}
      <div className="hidden md:flex items-center gap-6 font-bold text-[13px] tracking-wider uppercase">
        {user ? (
          <>
            <Link href="/dashboard" className="text-hanashi-primary hover:text-hanashi-secondary transition-colors">
              Dashboard
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-2 bg-hanashi-secondary text-white px-6 py-2.5 rounded-xl hover:bg-opacity-90 transition-colors shadow-sm"
            >
              <User className="w-4 h-4" />
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link href="/login" className="text-hanashi-primary hover:text-hanashi-secondary transition-colors">
              Login
            </Link>
            <Link
              href="/register"
              className="bg-hanashi-secondary text-white px-6 py-2.5 rounded-xl hover:bg-opacity-90 transition-colors shadow-sm tracking-normal text-sm font-semibold whitespace-nowrap"
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
