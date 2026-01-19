
import Link from "next/link";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: siteConfig.portfolio.title,
  description: siteConfig.portfolio.description,
};

export default function PortfolioPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Portfolio — Coming Soon</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          I don’t have client work to showcase yet. I’m building a curated selection of projects
          that demonstrate fintech and marketing solutions. Check back soon or get notified when
          the portfolio is live.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md">Request a preview</Link>
          <Link href="/" className="text-sm text-gray-600 underline">Return home</Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">If you want, I can add a signup form here to capture emails — tell me and I&apos;ll add it.</div>
      </div>
    </main>
  );
}
