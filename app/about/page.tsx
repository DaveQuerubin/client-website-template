import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "About",
  description: siteConfig.about.description,
  openGraph: {
    title: siteConfig.about.title,
    description: siteConfig.about.description,
  },
};

export default function AboutPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">About Us — {siteConfig.about.title}</h1>
            <p className="mt-4 text-gray-600 max-w-xl">{siteConfig.about.description}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md">Talk to us</Link>
              <Link href="/services" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md">Our Services</Link>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/hero.jpg" alt="About hero" width={800} height={520} className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* About content */}
        <section className="mt-14 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900">What we do for Marketing & Fintech brands</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We craft data-driven marketing funnels and build compliant, high-performance fintech
              experiences. From landing pages that convert to secure payment integrations and analytics,
              our work prioritizes performance, accessibility, and measurable growth.
            </p>

            <ul className="mt-6 flex gap-4 flex-wrap">
              <li className="bg-white rounded-lg p-4 shadow-sm flex-3 min-w-0">
                <h3 className="font-semibold text-gray-900">Conversion-focused Design</h3>
                <p className="text-sm text-gray-600 mt-1">Landing pages, A/B testing, and UX improvements focused on revenue.</p>
              </li>
              <li className="bg-white rounded-lg p-4 shadow-sm flex-3 min-w-0">
                <h3 className="font-semibold text-gray-900">Secure Integrations</h3>
                <p className="text-sm text-gray-600 mt-1">PCI-compliant payment flows, API integrations, and data privacy best practices.</p>
              </li>
              <li className="bg-white rounded-lg p-4 shadow-sm flex-3 min-w-0">
                <h3 className="font-semibold text-gray-900">Growth & Analytics</h3>
                <p className="text-sm text-gray-600 mt-1">Implementation of event tracking, funnels and reporting to inform marketing decisions.</p>
              </li>
              <li className="bg-white rounded-lg p-4 shadow-sm flex-3 min-w-0">
                <h3 className="font-semibold text-gray-900">Performance Engineering</h3>
                <p className="text-sm text-gray-600 mt-1">Fast, SEO-friendly sites with best practices for caching and asset optimization.</p>
              </li>
            </ul>
          </div>

          {/* <aside className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <Image src="/images/hero.jpg" alt="Fintech features" width={400} height={220} className="w-full h-auto object-cover rounded" />
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900">Focused on measurable ROI</h4>
              <p className="text-sm text-gray-600 mt-2">We work with marketing teams and fintech founders to deliver projects that move the needle.</p>
            </div>
          </aside> */}
        </section>

        {/* Stats + CTA */}
        <section className="mt-14 bg-gradient-to-r from-white to-gray-50 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-8">
            <div>
              <div className="text-2xl font-bold text-indigo-600">+120%</div>
              <div className="text-sm text-gray-600">Avg. conversion uplift</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">99.99%</div>
              <div className="text-sm text-gray-600">Uptime & reliability</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">4.8/5</div>
              <div className="text-sm text-gray-600">Avg. client satisfaction</div>
            </div>
          </div>

          <div>
            <Link href="/contact" className="inline-flex items-center bg-indigo-600 text-white px-5 py-2 rounded-md">Start a project</Link>
          </div>
        </section>
      </div>
    </main>
  );
}

