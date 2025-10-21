import Header from "@/components/header";
import TopBar from "@/components/top-bar";
import React from "react";
import Navigation from "@/components/nav";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import Carousel from "@/components/carousel";

export default function Page() {
  return (
    <main>
     
      <Header />

      {/* Hero Section */}
      <section className="relative h-[650px] overflow-hidden">
        <Navigation />
        <div className="relative w-full h-[600px] overflow-hidden">
  <img
    src="/Banners/Website Banner 2.png" // Replace with your image file
    alt="About Us"
    className="w-full h-[600px] object-cover"
  />
  <div className="absolute inset-0 bg-black/20" />
</div>

        <div className="container relative mx-auto px-4 py-20 max-w-[76rem] mt-[4rem]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Pricelist & Brochure
            </h1>
            
          </div>
          <a href="/products">
            <Button
              variant="default"
              className="bg-[#5C1E1E] hover:bg-[#4A1818] text-[1.1rem] mt-8 font-medium p-[1rem]"
            >
              <span>Our Products</span>
            </Button>
          </a>
        </div>
      </section>

      <section className="w-full bg-[#5C1E1E] py-12 px-4 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-3xl font-bold text-center mb-12">
            <span className="font-extrabold">3M</span> Pricelist and Brochure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {/* Pricelist Card */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-full max-w-[23rem]">
              <div className="relative w-full h-[28rem] mb-6">
                <Image
                  src="/3m_price/img1.png"
                  alt="3M Pricelist Cover"
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
              <h3 className="text-gray-800 text-xl font-medium mb-5">
                Pricelist PDF
              </h3>
              <a download href="/3m_price/3m_pricelist.pdf">
                <button className="bg-gradient-to-r from-[#5a1c0e] to-[#7a2b16] text-white text-sm font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 uppercase">
                  Download Pricelist
                </button>
              </a>
            </div>

            {/* Brochure Card */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-full max-w-[23rem]">
              <div className="relative w-full h-[28rem] mb-6">
                <Image
                  src="/3m_Brouch/img1.png"
                  alt="3M Brochure Cover"
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
              <h3 className="text-gray-800 text-xl font-medium mb-5">
                Brochure PDF
              </h3>
              <a download href="/3m_Brouch/3m_Brouchure.pdf">
                <button className="bg-gradient-to-r from-[#5a1c0e] to-[#7a2b16] text-white text-sm font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 uppercase">
                  Download Brochure
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#5C1E1E] py-12 px-4 flex-grow">
        <div className="max-w-6xl space-x-2 mx-auto">
          <h2 className="text-white text-3xl font-bold text-center mb-12">
            <span className="font-extrabold">Dowell's</span> Pricelist and Brochure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {/* Pricelist Card */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-full max-w-[23rem]">
              <div className="relative w-full h-[28rem] mb-6">
                <Image
                  src="/dow_price/img1.png"
                  alt="3M Pricelist Cover"
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
              <h3 className="text-gray-800 text-xl font-medium mb-5">
                Dowells Pricelist PDF
              </h3>
              <a download href="/DOWELL'S PRICE LIST 2025.pdf">
                <button className="bg-gradient-to-r from-[#5a1c0e] to-[#7a2b16] text-white text-sm font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 uppercase">
                  Download Pricelist
                </button>
              </a>
            </div>

            {/* Brochure Card 
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-full max-w-[23rem]">
              <div className="relative w-full h-[28rem] mb-6">
                <Image
                  src="/gland_cat/img1.png"
                  alt="3M Brochure Cover"
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
              <h3 className="text-gray-800 text-xl font-medium mb-5">
                Glands Catalogue PDF
              </h3>
              <a download href="/sock_cat/Sockets_catalogue_1.pdf">
                <button className="bg-gradient-to-r from-[#5a1c0e] to-[#7a2b16] text-white text-sm font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 uppercase">
                  Download Brochure
                </button>
              </a>
            </div>
*/}
            {/* Brochure Card */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-full max-w-[23rem]">
              <div className="relative w-full h-[28rem] mb-6">
                <Image
                  src="/Dowells-cat-new.png"
                  alt="3M Brochure Cover"
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
              <h3 className="text-gray-800 text-xl font-medium mb-5">
                Dowells Catalogue
              </h3>
              <a download href="/Dowells Catalogue New.pdf">
                <button className="bg-gradient-to-r from-[#5a1c0e] to-[#7a2b16] text-white text-sm font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 uppercase">
                  Download Brochure
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
