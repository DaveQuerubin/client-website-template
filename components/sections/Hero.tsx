import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="text-center mb-16">
       <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 ">
              Z-Pattern Layout Option
       </div></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Z Pattern Start */}
          <div className="space-y-8">
            {/* Main Headline - Top Left */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                {hero.title.split(' ').slice(0, 2).join(' ')}
                <span className="block text-blue-600">
                  {hero.title.split(' ').slice(2).join(' ')}
                </span>
              </h1>
            </div>

            {/* Supporting Text - Middle Left */}
            <div className="space-y-4">
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {hero.subtitle}
              </p>

              {/* Key Benefits - F Pattern Horizontal Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-600">Fast</div>
                  <div className="text-sm text-gray-600">Lightning quick</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-600">Secure</div>
                  <div className="text-sm text-gray-600">Bank-level security</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-600">Proven</div>
                  <div className="text-sm text-gray-600">Results driven</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Bottom Left */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
              >
                {hero.cta}
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right Column - Z Pattern End */}
          <div className="relative">
            {/* Main Visual */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <Image
                src={hero.image}
                alt="Business website design showcase"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />

              {/* Floating Elements - Multiple Choice Options */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg">
                Option A
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Option B
              </div>
              <div className="absolute top-1/2 -right-6 bg-purple-500 text-white px-3 py-1 rounded-full font-bold shadow-lg transform -rotate-12">
                Option C
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-yellow-200 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Bottom Section - Additional Choices */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Choose your perfect solution:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <span className="font-semibold text-gray-800">Marketing Website</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <span className="font-semibold text-gray-800">Fintech Platform</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <span className="font-semibold text-gray-800">E-commerce Store</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <span className="font-semibold text-gray-800">Portfolio Site</span>
            </div>
          </div>
        </div>
      </div>

      {/* F-Pattern Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* F-Pattern Header - Horizontal across top */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
              F-Pattern Layout Option
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Traditional Reading Flow Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Following natural eye movement patterns for optimal content consumption and conversion
            </p>
          </div>

          {/* F-Pattern Content Layout */}
          <div className="max-w-6xl mx-auto">
            {/* Top Horizontal Bar - Primary Headline */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-xl mb-8 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Primary Headline Area</h3>
              <p className="text-lg opacity-90">This is where the main message goes - users read left to right first</p>
            </div>

            {/* Second Horizontal Bar - Sub-headline */}
            <div className="bg-blue-600 text-white p-6 rounded-lg mb-8 shadow-md">
              <h4 className="text-xl font-semibold mb-2">Secondary Message</h4>
              <p className="opacity-90">Supporting information that reinforces the main headline</p>
            </div>

            {/* Left Vertical Content - F Pattern Flow */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content Column - Left Side */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Feature 1</h5>
                  <p className="text-gray-600">Users naturally scan down this left column after reading the horizontal headlines above. This creates a comfortable reading flow.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Feature 2</h5>
                  <p className="text-gray-600">Content flows vertically down the left side, following how people naturally read web content in an F-shaped pattern.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Feature 3</h5>
                  <p className="text-gray-600">This layout works well for content-heavy sections where you want users to read through information systematically.</p>
                </div>

                {/* CTA in F-Pattern */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
                  <h6 className="text-lg font-semibold mb-2">Ready to Convert?</h6>
                  <p className="mb-4">This CTA appears naturally at the end of the content flow</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Get Started with F-Pattern
                  </Link>
                </div>
              </div>

              {/* Sidebar - Right Column */}
              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h6 className="font-semibold text-gray-900 mb-2">Why F-Pattern Works</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Natural reading flow</li>
                    <li>• Proven conversion rates</li>
                    <li>• Easy content scanning</li>
                    <li>• Traditional layout</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h6 className="font-semibold text-gray-900 mb-2">Best For</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Content-heavy pages</li>
                    <li>• Blog layouts</li>
                    <li>• Service descriptions</li>
                    <li>• Traditional businesses</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                  <h6 className="font-semibold text-gray-900 mb-2">F-Pattern Stats</h6>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">79%</div>
                    <div className="text-xs text-gray-600">of users scan in F-pattern</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
