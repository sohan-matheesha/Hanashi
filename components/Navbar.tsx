import Link from "next/link";
import { Castle, User } from "lucide-react"; // Using Castle/Home icon as substitute for the temple logo
import { createClient } from "@/utils/supabase/server";

export default async function Navbar() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <nav className="w-full h-20 px-8 flex items-center justify-between bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Castle className="w-6 h-6 text-hanashi-dark" />
        <span className="font-bold text-xl text-hanashi-dark">
          Hanashi <span className="font-jp text-gray-500 font-normal">(話し)</span>
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-hanashi-dark">
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

      {/* Auth Buttons */}
      <div className="flex items-center gap-6 font-semibold text-sm">
        {user ? (
          <>
            <Link href="/dashboard" className="text-hanashi-dark hover:text-hanashi-primary transition-colors">
              Dashboard
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-2 bg-hanashi-primary text-white px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition-colors shadow-sm"
            >
              <User className="w-4 h-4" />
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link href="/login" className="text-hanashi-dark hover:text-hanashi-primary transition-colors">
              Login
            </Link>
            <Link
              href="/register"
              className="bg-hanashi-primary text-white px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition-colors shadow-sm"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
