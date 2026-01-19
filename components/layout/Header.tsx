"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  //{ label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">

        <Link href="/" className="flex items-center gap-3">
          <Image src={siteConfig.brand.logo} alt={`${siteConfig.brand.name} logo`} width={40} height={40} />
          <span className="font-semibold text-lg text-gray-900">{siteConfig.brand.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm font-medium text-gray-700">
            {nav.map((n) => (
              <li key={n.href}>
                <Link className="hover:text-gray-900" href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">Get a Quote</Link>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4">
            <ul className="flex flex-col gap-3 text-gray-700">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link onClick={() => setOpen(false)} className="block py-2" href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Link onClick={() => setOpen(false)} href="/contact" className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-md">Get a Quote</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
