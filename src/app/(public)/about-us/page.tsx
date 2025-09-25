import Header from "@/components/header";
import TopBar from "@/components/top-bar";
import React from "react";
import Navigation from "@/components/nav";
import Image from "next/image";
import { Trophy, Users, Briefcase, TrendingUp, Home } from "lucide-react";
import { Zap, Flame, Radio, Factory, Building2, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import StepsGuide from "@/components/steps";
import { Clock, Phone, MapPin } from "lucide-react";
import CertificatesSection from "@/components/cert";
import Link from "next/link";
import Carousel from "@/components/carousel";
import MetricsSectionn from "@/components/about-us-metric";

export default function Page() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Navigation />
        {/* Carousel with fade transition */}
        <Carousel />

        <div className="container relative mx-auto px-4 py-20 max-w-[76rem] mt-[4rem]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* About Us Section */}
     <section className="w-full py-12 bg-gray-100">
  <div className="container mx-auto max-w-[76rem] px-4 md:px-6">
    {/* About Company Header */}
    <div className="mb-8 text-right mx-auto w-auto">
      <h3 className="text-gray-500 uppercase tracking-wider text-sm md:text-base text-center">
        ABOUT COMPANY
      </h3>
    </div>

    {/* Main Content Area */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left Column - Images */}
      <div className="space-y-4">
        <div className="relative w-full h-[350px] md:h-[400px]">
          <Image
            src="/about.png"
            alt="Sheth Trading Corporation - Electrical Solutions"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Right Column - Text Content */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Sheth Trading Corporation
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Authorized Distributor of 3M & Dowells
          </h2>

          <p className="text-gray-600 mb-4">
            Founded in 1994, Sheth Trading Corporation has established itself as
            a trusted name in India’s electrical and energy sector, specializing
            in high-voltage cable management solutions. With a strong legacy of
            reliability and service excellence, we are proud to be an authorized
            distributor of <strong>3M</strong> and <strong>Dowells</strong>, two
            globally respected leaders in electrical technology.
          </p>

          <p className="text-gray-600 mb-4">
            <strong>3M Heat Shrink Cable Jointing Kits</strong> – Engineered for
            safety, durability, and superior insulation, these kits deliver
            long-lasting performance in medium- and high-voltage networks. Known
            for ease of installation and global standards, 3M kits are trusted
            worldwide for secure power connections.
          </p>

          <p className="text-gray-600 mb-4">
            <strong>Dowells Cable End Terminals and Cable Glands</strong> –
            Designed with precision and quality, Dowells products ensure
            excellent conductivity, secure termination, and robust protection.
            From copper and aluminum lugs to a wide range of glands, Dowells is
            the benchmark for consistency and performance.
          </p>

          <p className="text-gray-600 mb-4">
            Over the past three decades, we have earned the trust of contractors,
            OEMs, EPC companies, and utility providers by consistently delivering
            genuine products, on-time service, and tailored solutions. What sets
            us apart is not just our product range, but our dedicated team,
            guiding clients with technical expertise, competitive quotations,
            and reliable after-sales support.
          </p>

          <p className="text-gray-600">
            By adopting digital tools, data-driven inventory management, and
            modern service practices, Sheth Trading Corporation continues to
            evolve while staying true to its values of trust, reliability, and
            customer commitment.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be a national leader in electrical distribution, expanding our
              reach with brand-certified products, technology-driven operations,
              and value-added services that support the evolving needs of
              industries across India.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide safe, high-performance, and certified electrical
              solutions backed by technical expertise, excellent service, and
              long-term partnerships—ensuring reliability and growth for every
              customer we serve.
            </p>
            <br/>
          </div>
        </div>
      </div>
    </div>


          {/* Stats Section */}
          <MetricsSectionn />
        </div>
      </section>

      {/* Industry */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto max-w-[76rem] px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="sub-title">THE BEST INDUSTRY SERVICES</h3>
            <h2 className="title">
              Provide Awesome Services <br></br> For Industrial Company
            </h2>
          </div>

          {/* Services Grid - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Power Generation Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm transition-colors duration-300 hover:bg-[#5C1E1E] hover:text-white group">
              <div className="flex items-start">
                <div className="mr-4 p-3 border border-gray-200 rounded-full group-hover:border-amber-700">
                  <Zap className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white">
                    Power Generation & Distribution
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200">
                    Essential for secure power transmission in plants and
                    substations.
                  </p>
                </div>
              </div>
            </div>

            {/* Oil & Gas Card - Default Brown */}
            <div className="bg-white rounded-lg p-6 shadow-sm transition-colors duration-300 hover:bg-[#5C1E1E] hover:text-white group">
              <div className="flex items-start">
                <div className="mr-4 p-3 border border-gray-200 rounded-full group-hover:border-amber-700">
                  <Flame className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white">
                    Oil & Gas
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200">
                    Reliable electrical connections in hazardous environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Telecommunications Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm transition-colors duration-300 hover:bg-[#5C1E1E] hover:text-white group">
              <div className="flex items-start">
                <div className="mr-4 p-3 border border-gray-200 rounded-full group-hover:border-amber-700">
                  <Radio className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white">
                    Telecommunications
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200">
                    Maintains performance in communication networks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Industrial Manufacturing Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm transition-colors duration-300 hover:bg-[#5C1E1E] hover:text-white group">
              <div className="flex items-start">
                <div className="mr-4 p-3 border border-gray-200 rounded-full group-hover:border-amber-700">
                  <Factory className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white">
                    Industrial Manufacturing
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200">
                    Durable solutions for demanding industrial settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Construction & Infrastructure Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm transition-colors duration-300 hover:bg-[#5C1E1E] hover:text-white group">
              <div className="flex items-start">
                <div className="mr-4 p-3 border border-gray-200 rounded-full group-hover:border-amber-700">
                  <Building2 className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white">
                    Construction & Infrastructure
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200">
                    Trusted in residential, commercial, and infrastructure
                    projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Transportation Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm transition-colors duration-300 hover:bg-[#5C1E1E] hover:text-white group">
              <div className="flex items-start">
                <div className="mr-4 p-3 border border-gray-200 rounded-full group-hover:border-amber-700">
                  <Train className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white">
                    Transportation
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200">
                    Ensures safe electrical systems in railways, airports, and
                    seaports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StepsGuide />

      {/* Stats */}
      <div className="p-[1rem] bg-gray-50">
        <div className="w-full mb-[4rem]  max-w-7xl mx-auto shadow-lg rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Hours Section */}
            <div className="flex items-center justify-center bg-gray-900 text-white p-6 md:p-8 flex-1">
              <div className="mr-4">
                <Clock size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase mb-1">
                  WE ARE OPEN MONDAY-FRIDAY
                </h3>
                <p className="text-base md:text-2xl font-semibold">
                  11:00 AM to 6:00 PM
                </p>
              </div>
            </div>

            {/* Call Section */}
            <div className="flex items-center justify-center bg-red-900 text-white p-6 md:p-8 flex-1">
              <div className="mr-4">
                <Phone size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase mb-1">
                  CALL US 24/7
                </h3>
                <p className="text-base md:text-2xl font-semibold">
                  +91 (033) 2237 9239
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="flex items-center justify-center bg-gray-900 text-white p-6 md:p-8 flex-1">
              <div className="mr-4">
                <MapPin size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase mb-1">
                  OUR OFFICE ADDRESS
                </h3>
                <p className="text-base md:text-2xl font-semibold">
                  22 Rabindra Sarani, Tirreti Market. Shop #322, Kolkata -
                  700073
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certs */}
      <CertificatesSection />
    </main>
  );
}
