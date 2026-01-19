
import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

export const metadata = { 
  title: siteConfig.services.title,
  description: siteConfig.services.description,
  keywords: siteConfig.services.keywords,
}; 

export default function ServicesPage() {
  return (
    <main className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Services — Static Sites, APIs & Fintech</h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              I build fast static websites and robust APIs for fintech and marketing teams.
              Available services include static site builds, API development,
              secure payment integrations, and AWS-based deployment and infrastructure.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md">Request a Quote</Link>
              {/* <Link href="/portfolio" className="inline-flex items-center border border-gray-200 px-4 py-2 rounded-md text-gray-700">View Work</Link> */}
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/hero.jpg" alt="Services hero" width={800} height={520} className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* Services list */}
        <section className="mt-14">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-gray-600 text-sm">{service.description}</p>
                <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
                  {service.features?.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Sidebar feature + CTA */}
        <section className="mt-14 grid gap-8 md:grid-cols-3">
          <aside className="md:col-span-1 bg-white rounded-lg p-6 shadow-sm">
            <Image src="/images/services-feature.svg" alt="Services feature" width={400} height={220} className="w-full h-auto rounded" />
            <h4 className="mt-4 font-semibold text-gray-900">API & Fintech Expertise</h4>
            <p className="text-sm text-gray-600 mt-2">Design and build secure APIs, payment flows, and integrations tailored to fintech products. I follow best practices for authentication, logging, monitoring, and compliance needs.</p>
          </aside>

          <div className="md:col-span-2 bg-white rounded-lg p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Engagements I offer</h4>
              <ul className="mt-4 grid gap-3 md:grid-cols-2 text-sm text-gray-600">
                <li className="p-3 border rounded">Static marketing websites (fast, SEO-ready)</li>
                <li className="p-3 border rounded">API development</li>
                <li className="p-3 border rounded">Fintech integrations (payments, KYC)</li>
                <li className="p-3 border rounded">Cloud (AWS) and On premise deployments</li>
              </ul>
            </div>

            <div className="mt-6">
              <Link href="/contact" className="inline-flex items-center bg-indigo-600 text-white px-5 py-2 rounded-md">Start your project</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

