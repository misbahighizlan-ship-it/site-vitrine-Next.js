/*import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        
        <Link href="/" className="text-xl font-bold text-yellow-400">
          NextVibe
        </Link>

       
        <nav className="space-x-6 text-sm">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link href="/services" className="hover:text-yellow-400">
            Services
          </Link>
          <Link href="/about" className="hover:text-yellow-400">
            À propos
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
             Contact 
          </Link>
        </nav>
      </div>
    </header>
  );
}
*/
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-yellow-400">
          NextVibe
        </h1>

        <nav className="space-x-6 text-sm">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/services" className="hover:text-yellow-400">Services</Link>
          <Link href="/about" className="hover:text-yellow-400">À propos</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
