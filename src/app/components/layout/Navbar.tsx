'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const linkClasses = (path: string) =>
    `transition-colors ${
      isActive(path)
        ? 'text-brand-forest font-semibold'
        : 'text-brand-dark hover:text-brand-forest'
    }`;

  const mobileLinkClasses = (path: string) =>
    `block py-2 transition-colors ${
      isActive(path)
        ? 'text-brand-forest font-semibold'
        : 'text-brand-dark hover:text-brand-forest'
    }`;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-brand-forest hover:text-brand-leaf transition-colors"
          >
            The Green Buffet
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/menu" className={linkClasses('/menu')}>
              Menu
            </Link>
            <Link href="/about" className={linkClasses('/about')}>
              About
            </Link>
            <Link href="/location" className={linkClasses('/location')}>
              Location
            </Link>
            <Link
              href="/order"
              className="bg-brand-warm text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-brand-dark hover:text-brand-forest transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/menu"
              className={mobileLinkClasses('/menu')}
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/about"
              className={mobileLinkClasses('/about')}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/location"
              className={mobileLinkClasses('/location')}
              onClick={() => setIsMenuOpen(false)}
            >
              Location
            </Link>
            <Link
              href="/order"
              className="block text-center bg-brand-warm text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}