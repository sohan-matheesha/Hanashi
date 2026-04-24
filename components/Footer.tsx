import Link from "next/link";
import { Castle, Globe, Share2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-8 border-t border-gray-50 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8 mb-24">
        {/* Brand Column */}
        <div className="flex flex-col gap-8 pr-12">
          <Link href="/" className="flex items-center gap-2 text-hanashi-primary">
            <Castle className="w-6 h-6" />
            <span className="font-extrabold text-2xl tracking-tight">
              Hanashi <span className="font-jp font-medium text-hanashi-primary/80 opacity-80 text-[22px]">(話し)</span>
            </span>
          </Link>
          <p className="text-black leading-relaxed font-medium max-w-[320px]">
            Connecting hearts and minds through the beauty of the Japanese language.
            <br />
            <span className="text-gray-500 mt-2 block">Headquartered in Tokyo, Japan.</span>
          </p>
          <div className="flex items-center gap-4 mt-2">
            <button className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-hanashi-accent/30 text-hanashi-primary transition-all shadow-sm">
              <Globe className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-hanashi-accent/30 text-hanashi-primary transition-all shadow-sm">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-hanashi-accent/30 text-hanashi-primary transition-all shadow-sm">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Column */}
        <div>
          <h3 className="font-bold text-[11px] tracking-widest text-hanashi-primary uppercase mb-8">Product</h3>
          <ul className="flex flex-col gap-5 text-[15px] font-medium text-gray-500">
            <li><Link href="#" className="hover:text-hanashi-primary transition-colors">Lessons</Link></li>
            <li><Link href="#" className="hover:text-hanashi-primary transition-colors">Practice</Link></li>
            <li><Link href="#" className="hover:text-hanashi-primary transition-colors">Flashcards</Link></li>
            <li><Link href="#" className="hover:text-hanashi-primary transition-colors">Apps</Link></li>
          </ul>
        </div>

        {/* Community Column */}
        <div>
          <h3 className="font-bold text-[11px] tracking-widest text-hanashi-primary uppercase mb-8">Community</h3>
          <ul className="flex flex-col gap-5 text-[15px] font-medium text-gray-500">
            <li><Link href="#" className="hover:text-hanashi-primary transition-colors">Forum</Link></li>
            <li><Link href="#" className="hover:text-hanashi-primary transition-colors">Events</Link></li>
            <li><Link href="#" className="hover:text-hanashi-primary transition-colors">Partners</Link></li>
            <li><Link href="#" className="hover:text-hanashi-primary transition-colors">Stories</Link></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="font-bold text-[11px] tracking-widest text-hanashi-primary uppercase mb-8">Support</h3>
          <ul className="flex flex-col gap-5 text-[15px] font-medium text-gray-500">
            <li><Link href="#" className="hover:text-hanashi-primary transition-colors">Help Center</Link></li>
            <li><Link href="#" className="hover:text-hanashi-primary transition-colors">Contact</Link></li>
            <li><Link href="#" className="hover:text-hanashi-primary transition-colors">Privacy</Link></li>
            <li><Link href="#" className="hover:text-hanashi-primary transition-colors">Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-100 flex flex-col items-center justify-center text-center">
        <p className="text-[13px] font-medium text-gray-400">
          © {new Date().getFullYear()} Hanashi Language Systems Inc. Designed with intention in Kyoto.
        </p>
      </div>
    </footer>
  );
}
