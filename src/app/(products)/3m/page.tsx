"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Cart from "@/components/cart";
import Image from "next/image";

const products = [
  {
    name: "Heat Shrink Cable Jointing kit",
    image: "/3m/HEAT_SHRINK_JOINTING_KIT/img1.png",
    slug: "heat-shrink-cable-jointing-kit",
  },
  {
    name: "Scotch cast 450",
    image: "/3m/SCOTCHCAST_450/img1.png",
    slug: "scotch-cast-450",
  },
  {
    name: "Heat shrink sleeves",
    image: "/3m/HEAT_SHRINK_SLEEVES/BUSBAR_SLEEVES/img1.png",
    slug: "heat-shrink-sleeves",
  },
  {
    name: "Red insulation sealer",
    image: "/3m/RED_INSULATION_SEALER/img1.png",
    slug: "red-insulation-sealer",
  },
  {
    name: "Tapes",
    image: "/3m/TAPES/img1.png",
    slug: "tapes",
  },
];

export default function Component() {
  const router = useRouter();

  const handleCardClick = (slug: string) => {
    router.push(`/3m/${slug}`);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            className="flex items-center"
            onClick={handleBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="hidden sm:block">Back</span>
          </Button>
          <h1 className="text-3xl font-bold text-center flex-grow">
            3M Products
          </h1>
          <div className="pr-[1rem]">
            <Cart />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col md:flex-row overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleCardClick(product.slug)}
            >
              <div className="max-w-[10rem] max-h-[15rem] sm:max-h-[5rem]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="flex-1 flex items-center justify-center p-4">
                <h2 className="text-xl font-semibold text-center md:text-left">
                  {product.name}
                </h2>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
