"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // capture the form element immediately to avoid React synthetic event reuse
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      });
      // clear the form fields
      form.reset();
      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Let’s discuss your project</h1>
            <p className="mt-4 text-gray-600 max-w-xl">Describe your goals, timelines, and any technical constraints — I’ll follow up with a scoped plan and estimate.</p>
            <div className="mt-6 text-sm text-gray-600">
              <div>Email: <a className="text-indigo-600" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div>
              <div>Phone: <a className="text-indigo-600" href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a></div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/contact.png" alt="Contact hero" width={800} height={520} className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* Form + details */}
        <section className="mt-12 grid gap-8 md:grid-cols-3">
          <form onSubmit={handleSubmit} className="md:col-span-2 bg-white rounded-lg p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Start a conversation</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col">
                <span className="text-sm text-gray-600">Name</span>
                <input name="name" required className="mt-1 border rounded p-2 text-gray-900 focus:text-black placeholder-gray-400" />
              </label>
              <label className="flex flex-col">
                <span className="text-sm text-gray-600">Email</span>
                <input name="email" type="email" required className="mt-1 border rounded p-2 text-gray-900 focus:text-black placeholder-gray-400" />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-sm text-gray-600">Company (optional)</span>
              <input name="company" className="mt-1 border rounded p-2 text-gray-900 focus:text-black placeholder-gray-400" />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-gray-600">Project details</span>
              <textarea name="message" rows={6} required className="mt-1 border rounded p-2 text-gray-900 focus:text-black placeholder-gray-400" />
            </label>

            <div className="flex items-center gap-4">
              <button type="submit" className="bg-indigo-600 text-white px-5 py-2 rounded-md">{loading ? 'Sending...' : 'Send message'}</button>
              <span className="text-sm text-gray-500">Or email directly: <a className="text-indigo-600" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></span>
            </div>

            {success && <div className="text-green-600 font-bold text-xl text-center">Thanks — I will contact you shortly.</div>}

          </form>

          <aside className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900">What I need</h4>
            <ul className="mt-3 text-sm text-gray-600 list-disc list-inside space-y-2">
              <li>Short project description and goals</li>
              <li>Desired timeline and budget range</li>
              <li>Any relevant API or infrastructure details</li>
            </ul>

            <div className="mt-6">
              <h5 className="text-sm font-medium text-gray-900">Availability</h5>
              <p className="text-sm text-gray-600 mt-1">Open to short engagements, long-term projects, and hourly consulting.</p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
