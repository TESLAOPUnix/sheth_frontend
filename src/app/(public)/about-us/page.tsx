import Header from "@/components/header";
import Navigation from "@/components/nav";
import Image from "next/image";
import { Zap, Flame, Radio, Factory, Building2, Train, Clock, Phone, MapPin } from "lucide-react";
import StepsGuide from "@/components/steps";
import CertificatesSection from "@/components/cert";
import MetricsSectionn from "@/components/about-us-metric";

export default function Page() {
  return (
    <main className="bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Navigation />

        {/* Banner */}
        <div className="relative w-full aspect-[2.73/1] sm:h-[400px] md:h-[500px] min-h-[240px]">
            {/* Background Image */}
            <Image
              src="/Banners/banner 3.png"
              alt="Banner"
              fill
              className="object-cover"
              priority
            />
        
            {/* Optional dark overlay for readability */}
            <div className="absolute inset-0 bg-black/20 sm:bg-black/10"></div>
        
            {/* Overlay content */}
            <div className="absolute inset-0 flex items-center px-4 sm:px-10">
              <h1
                className="
                  text-3xl font-bold text-white drop-shadow-md 
                  sm:text-4xl md:text-5xl lg:text-6xl
                "
              >
              About Us
              </h1>
            </div>
          </div>
      </section>

      {/* About Section */}
      <section className="w-full py-14 sm:py-20 bg-gray-100">
        <div className="container mx-auto max-w-[92rem] px-4 sm:px-8 md:px-10">
          <div className="mb-8 text-center">
            <h3 className="text-gray-500 uppercase font-extrabold tracking-wider text-sm md:text-lg">
              About Company
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-14 items-start">
            {/* Image Section */}
            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[420px]">
              <Image
                src="/about.png"
                alt="Sheth Trading Corporation - Electrical Solutions"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            </div>

            {/* Text Section */}
            <div className="space-y-6 leading-relaxed max-w-[56rem] text-gray-700 text-[0.95rem] sm:text-base">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                Welcome to Sheth Trading Corporation
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                Authorized Distributor of 3M & Dowells
              </h2>

              <p>
                Founded in 1994, Sheth Trading Corporation has established itself
                as a trusted name in India’s electrical and energy sector,
                specializing in high-voltage cable management solutions. We are
                proud to be an authorized distributor of <strong>3M</strong> and{" "}
                <strong>Dowells</strong>, two globally respected leaders in
                electrical technology.
              </p>

              <p>
                <strong>3M Heat Shrink Cable Jointing Kits</strong> – Engineered
                for safety, durability, and superior insulation, these kits
                deliver long-lasting performance in high-voltage networks.
              </p>

              <p>
                <strong>Dowells Cable End Terminals and Cable Glands</strong> –
                Designed for precision and quality, ensuring excellent
                conductivity, secure termination, and robust protection.
              </p>

              <p>
                We’ve earned the trust of contractors, OEMs, EPC companies, and
                utility providers by delivering genuine products, timely
                service, and tailored solutions.
              </p>

              <p>
                By adopting digital tools and data-driven inventory management,
                Sheth Trading Corporation continues to evolve while staying true
                to its core values of trust, reliability, and commitment.
              </p>

              {/* Vision & Mission */}
              <div className="space-y-5 pt-4">
                <div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-2">
                    Our Vision
                  </h3>
                  <p>
                    To be a national leader in electrical distribution,
                    expanding our reach through brand-certified products and
                    technology-driven operations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-2">
                    Our Mission
                  </h3>
                  <p>
                    To provide safe, high-performance, and certified electrical
                    solutions backed by technical expertise and long-term
                    partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <MetricsSectionn />

      {/* Industry Services */}
      <section className="w-full py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto max-w-[76rem] px-4 sm:px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm md:text-base uppercase tracking-wider text-gray-500 font-semibold">
              The Best Industry Services
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Provide Awesome Services for Industrial Companies
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Power Generation & Distribution",
                desc: "Essential for secure power transmission in plants and substations.",
              },
              {
                icon: Flame,
                title: "Oil & Gas",
                desc: "Reliable electrical connections in hazardous environments.",
              },
              {
                icon: Radio,
                title: "Telecommunications",
                desc: "Maintains performance in communication networks.",
              },
              {
                icon: Factory,
                title: "Industrial Manufacturing",
                desc: "Durable solutions for demanding industrial settings.",
              },
              {
                icon: Building2,
                title: "Construction & Infrastructure",
                desc: "Trusted in residential, commercial, and infrastructure projects.",
              },
              {
                icon: Train,
                title: "Transportation",
                desc: "Ensures safe electrical systems in railways, airports, and seaports.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm transition duration-300 hover:bg-[#5C1E1E] group"
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 border border-gray-200 rounded-full group-hover:border-amber-700">
                    <Icon className="w-6 h-6 text-gray-700 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-white">
                      {title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-200 text-sm sm:text-base">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <div className="py-12 sm:py-16 bg-gray-100">
        <div className="w-full max-w-7xl mx-auto shadow-lg rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {[
              {
                icon: Clock,
                title: "We are open Monday–Friday",
                value: "11:00 AM to 6:00 PM",
                bg: "bg-gray-900",
              },
              {
                icon: Phone,
                title: "Call us 24/7",
                value: "+91 (033) 2237 9239",
                bg: "bg-red-900",
              },
              {
                icon: MapPin,
                title: "Our Office Address",
                value:
                  "22 Rabindra Sarani, Tirreti Market. Shop #322, Kolkata - 700073",
                bg: "bg-gray-900",
              },
            ].map(({ icon: Icon, title, value, bg }, i) => (
              <div
                key={i}
                className={`flex items-center justify-center ${bg} text-white p-6 sm:p-8 flex-1`}
              >
                <div className="mr-4">
                  <Icon size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-medium uppercase mb-1">
                    {title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-2xl font-semibold">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificates */}
      <CertificatesSection />
    </main>
  );
}
