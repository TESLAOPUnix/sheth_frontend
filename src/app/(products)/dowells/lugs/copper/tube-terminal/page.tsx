"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft,Home } from "lucide-react";
import Link from "next/link";
import Cart from "@/components/cart";

const products = [
  {
    name: "Heavy Duty",
    image: "/placeholder.svg?height=200&width=200",
    slug: "heavy-duty",
  },
  {
    name: "Medium Duty",
    image: "/placeholder.svg?height=200&width=200",
    slug: "medium-duty",
  },
];

export default function Component() {
  const router = useRouter();

  const handleCardClick = (slug: string) => {
    router.push(`/dowells/lugs/copper/tube-terminal/${slug}`);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-6xl">
      <section className="relative h-[400px] overflow-hidden mb-[2rem]">
        
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/terms.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative mx-auto px-4 py-20 max-w-[76rem] mt-[4rem]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Products
            </h1>
            <nav className="flex items-center text-white text-sm mt-[1rem]">
              <Link
                href="/"
                className="flex items-center justify-center hover:text-gray-300 transition-colors"
              >
                <Home size={24} className="mr-1 font-bold" fontWeight={300} />
                <span className="font-semibold text-[1.1rem]">HOME</span>
              </Link>
              <span className="mx-2 text-gray-400">›</span>
              <span className="text-gray-300 font-medium">PRODUCTS</span>
              <span className="mx-2 text-gray-400">›</span>
              <span className="text-gray-300 font-medium">DOWELLS</span>
                      <span className="mx-2 text-gray-400">›</span>
                      <span className="text-gray-300 font-medium">LUGS</span>
                      <span className="mx-2 text-gray-400">›</span>
                      <span className="text-gray-300 font-medium">COPPER</span>
                      <span className="mx-2 text-gray-400">›</span>
                      <span className="text-gray-300 font-medium">TUBE-TERMINAL</span>                      
            </nav>
          </div>
        </div>
      </section>
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
            Dowells Lugs Copper Products
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
              {/* <div className="w-full md:w-1/2 h-48 md:h-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div> */}
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
