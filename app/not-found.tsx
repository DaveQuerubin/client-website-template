"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
        <p className="mt-4 text-lg text-gray-600">Page not found. Redirecting to the homepage in a few seconds.</p>
        <div className="mt-6">
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md">
            Go to homepage now
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-500">Or use the navigation above to continue browsing.</p>
      </div>
    </main>
  );
}
