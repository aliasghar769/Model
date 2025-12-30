"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-indigo-100 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          ModelAvenue
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/products" className="hover:text-indigo-600">Products</Link>
          <Link href="/about" className="hover:text-indigo-600">About</Link>
          <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
          <Link
            href="/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-indigo-100 flex justify-between  flex-col items-center border-t px-6 py-4 space-y-4">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/products">Products</Link>
          <Link onClick={() => setOpen(false)} href="/about">About</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
          <Link
            onClick={() => setOpen(false)}
            href="/login"
            className="block bg-indigo-600 px-4 text-white text-center py-2 rounded-md"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
