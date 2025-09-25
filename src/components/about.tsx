import { Users, Lightbulb, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import AnimatedTitle from "./animated-title";
import Link from "next/link";

export default function AboutCompany() {
  return (
    <section className="py-16 md:py-24 max-w-full mx-auto relative ">
      <div className="absolute inset-x-0  bg-gray-50 h-full -z-50 -top-4"></div>
      <div className="container max-w-[76rem] mx-auto px-4">
        {/* Header with decorative lines */}
        <div className="mb-16 flex items-center justify-center space-x-4">
          <div className="h-[2px] w-12 bg-[#5C1E1E]" />
          <h2 className="sub-title-2">ABOUT COMPANY</h2>
          <div className="h-[2px] w-12 bg-[#5C1E1E]" />
        </div>

        {/* Main content grid */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Images column */}
          <div className="space-y-8">
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
      <Image
        src="/3m_logo.webp"
        alt="Primary Company Image"
        fill
        className="object-contain"
      />
    </div>
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
      <Image
        src="/dowell.png"
        alt="Secondary Company Image"
        fill
        className="object-contain"
      />
            </div>
          </div>

          {/* Content column */}
          <div className="space-y-8 p-[1.5rem] text-[1rem]  sm:text-[1.2rem]">
            {/* Main description */}
            <p className="text-gray-600 leading-relaxed text-start">
             Founded in 1968 by Anil Parekh, Sheth Trading Corporation brings over 45 years of expertise in the industrial sector. Sheth Trading Corporation has grown to become a trusted name in India’s electrical and energy sector, specializing in high-voltage cable management solutions. With a legacy built on reliability, service excellence, and strong industry partnerships, we are proud to be an authorized distributor of globally renowned brands 3M and Dowells.

            </p>

            {/* Our Team section */}
            <div className="flex items-start justify-start space-x-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#5C1E1E]">
                <Users className="h-6 w-6 text-[#5C1E1E]" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 text-start">
                  Our Team
                </h3>
                <p className="text-gray-600 leading-relaxed text-start">
                  Our team of techno-commercial professionals is dedicated to understanding your needs and offering tailored solutions. We focus on providing value-enhancing products and exceptional support to ensure the best possible service.

                </p>
              </div>
            </div>

            {/* Our Vision section */}
            <div className="flex items-start justify-start  space-x-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#5C1E1E]">
                <Lightbulb className="h-6 w-6 text-[#5C1E1E]" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 text-start">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-start">
                 To be the leading distributor of high-quality electrical solutions in India and we are recognized for our commitment to innovation, reliability, and customer satisfaction.

                </p>
              </div>
            </div>

            <div className="flex flex-wrap sm:px-[1.5rem] items-center justify-center gap-2">
              <Link href="/about-us">
          <Button
          variant="default"
        className="bg-[#5C1E1E] hover:bg-[#513818e4] text-[1.1rem]"
        >
        Discover More
        </Button>
          </Link>
              <a href="tel:+9103322379239">
          <Button variant="default" className="bg-[#5C1E1E] hover:bg-[#4A1818]">
            <Phone className="mr-2 h-4 w-4" />
            <span>Call us</span>
          </Button>
          </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
