import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";

const socialLinks = [
  { name: "Facebook", href: "#", svg: facebookIcon },
  { name: "X", href: "#", svg: twitterIcon },
  { name: "LinkedIn", href: "#", svg: linkedinIcon },
  { name: "Instagram", href: "#", svg: instagramIcon },
  { name: "YouTube", href: "#", svg: youtubeIcon },
  { name: "GitHub", href: "#", svg: githubIcon },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3 items-start">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src={siteConfig.brand.logo} alt={`${siteConfig.brand.name} logo`} width={48} height={48} />
              <div>
                <h3 className="text-white font-bold text-lg">{siteConfig.brand.name}</h3>
                <p className="text-sm text-gray-400">{siteConfig.brand.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              {siteConfig.about?.description ?? 'We design and build fast, secure, and accessible websites.'}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link className="hover:text-white" href="/about">About</Link></li>
              <li><Link className="hover:text-white" href="/services">Services</Link></li>
              {/* <li><Link className="hover:text-white" href="/portfolio">Portfolio</Link></li> */}
              <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <p className="text-sm text-gray-400 mb-4">Follow us on social media or reach out via email:</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex items-center gap-2 rounded-md px-3 py-2 bg-gray-800 hover:bg-gray-700 transition text-sm"
                >
                  <span className="w-5 h-5" aria-hidden>{s.svg()}</span>
                  <span className="hidden sm:inline">{s.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <div>Email: <a className="hover:text-white" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div>
              <div>Phone: <a className="hover:text-white" href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a></div>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function facebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22 12a10 10 0 10-11.5 9.9v-7H8.5v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.3l-.4 2.9H14v7A10 10 0 0022 12z" />
    </svg>
  );
}

function twitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22 5.8c-.6.3-1.2.5-1.9.6a3.3 3.3 0 001.4-1.9c-.7.4-1.6.7-2.4.9A3.3 3.3 0 0015.5 4c-1.8 0-3.3 1.5-3.3 3.3 0 .3 0 .6.1.9C8.3 8 5.2 6.2 3.1 3.5c-.4.7-.6 1.5-.6 2.4 0 1.6.8 3 2 3.8-.6 0-1.2-.2-1.8-.5v.1c0 2.3 1.6 4.2 3.8 4.6-.4.1-.9.1-1.3.1-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.5 3.4A6.7 6.7 0 012 19.5 9.4 9.4 0 007 21c6.6 0 10.2-5.5 10.2-10.3v-.5c.7-.5 1.3-1.1 1.8-1.8-.6.3-1.3.6-2 .7z" />
    </svg>
  );
}

function linkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M4.98 3.5A2.5 2.5 0 112.5 6a2.5 2.5 0 012.48-2.5zM3 8.9h3.96V21H3V8.9zM9.5 8.9h3.8v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7V21h-3.9v-5.3c0-1.3 0-3-1.9-3-1.9 0-2.2 1.5-2.2 2.8V21H9.5V8.9z" />
    </svg>
  );
}

function instagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A4.8 4.8 0 1016.8 13 4.8 4.8 0 0012 8.2zM19.5 6a1.2 1.2 0 11-1.2-1.2A1.2 1.2 0 0119.5 6z" />
    </svg>
  );
}

function youtubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M21.6 7.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1-3-.2-7.6-.2-7.6-.2s-4.6 0-7.6.2c-.4 0-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S0 9 0 10.8v2.4C0 14.9.2 16.4.2 16.4s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.1 7.3.2 7.3.2s4.6 0 7.6-.2c.4 0 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.5.2-3.3v-2.4c0-1.8-.2-3.3-.2-3.3zM9.8 15.2V8.8l6.1 3.2-6.1 3.2z" />
    </svg>
  );
}

function githubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .5A12 12 0 000 12.6c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6.8 2 1.3.6 1 1.8.7 2.2.5.1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3 0 0 1-.3 3.4 1.2a11.5 11.5 0 016.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.5.2 2.7.1 3 0 .9 1.2 2 1.2 3.3 0 4.7-2.7 5.6-5.3 5.9.4.4.7 1 .7 2v3c0 .3.2.7.8.6A12 12 0 0012 .5z" />
    </svg>
  );
}
