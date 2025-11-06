"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import Header from "@/components/header";
import TopBar from "@/components/top-bar";
import { Home } from "lucide-react";
import Navigation from "@/components/nav";
import StepsGuide from "@/components/steps";
import Footer from "@/components/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface BrandCardProps {
  brand: "3M" | "Dowells";
  onClick: () => void;
}

function BrandCard({ brand, onClick }: BrandCardProps) {
  return (
    <div className="py-10 group relative w-full cursor-pointer" onClick={onClick}>
      <Card className="relative z-10 flex h-full flex-col overflow-hidden bg-white transition-shadow duration-500 hover:shadow-xl">
        <div className="flex-1 p-6">
          {/* Main Logo */}
          <div className="relative mx-auto aspect-video w-full max-w-[240px]">
            <Image
              src={brand === "3M" ? "/3m.jpg" : "/dowell.png"}
              alt={`${brand} Logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center gap-3 border-t p-4">
          <div className="h-10 w-10 overflow-hidden rounded bg-[#993300] p-2">
            <Image
              src={brand === "3M" ? "/3m.jpg" : "/dowell.png"}
              alt={`${brand} Icon`}
              width={24}
              height={24}
              objectFit="contain"
              className={`h-full w-full object-contain ${
                brand != "3M" ? "brightness-0 invert" : ""
              }`}
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{brand}</h3>
            <p className="text-sm text-gray-500">EXPLORE</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function BrandCards() {
  const router = useRouter();

  const handleRedirect = (destination: string) => {
    // Simulating redirection
    console.log(`Redirecting to ${destination}`);
    // Uncomment the next line to actually redirect:
    router.push(`/${destination.toLowerCase()}`);
  };

  return (
    <div className=" bg-gray-50">
      <Header />

      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative overflow-hidden">
  <Navigation />

  {/* Hero container */}
  <div className="relative w-full aspect-[2.73/1] sm:h-[400px] md:h-[500px] min-h-[240px]">
    {/* Background Image */}
    <Image
      src="/Banners/test banner 2.png"
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
        Products
      </h1>
    </div>
  </div>
</section>

      <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:flex-row my-[3rem] px-[1rem]  bg-gray-50">
        <BrandCard brand="3M" onClick={() => handleRedirect("3M")} />
        <BrandCard brand="Dowells" onClick={() => handleRedirect("Dowells")} />
      </div>
          <div className="bg-gray-100 mt-12"></div>
      <StepsGuide />
    </div>
  );
}
