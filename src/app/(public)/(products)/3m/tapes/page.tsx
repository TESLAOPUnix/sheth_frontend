"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";
import Cart from "@/components/cart";
import Link from "next/link";

const products = [
   {
    name: "Scotch 35",
    image: "/placeholder.svg?height=200&width=200",
    slug: "vinyl-tape/scotch-35",
  },
  {
    name: "Super 33",
    image: "/placeholder.svg?height=200&width=200",
    slug: "vinyl-tape/super-33",
  },
  {
    name: "Duct Tape",
    image: "/placeholder.svg?height=200&width=200",
    slug: "duct-tape",
  },
  {
    name: "Scotch 23",
    image: "/placeholder.svg?height=200&width=200",
    slug: "h1-tape/scotch-23",
  },
  {
    name: "Scotch 70",
    image: "/placeholder.svg?height=200&width=200",
    slug: "h1-tape/scotch-70",
  },
  {
    name: "Scotch 69",
    image: "/placeholder.svg?height=200&width=200",
    slug: "h1-tape/scotch-69",
  },
  {
    name: "Scotch 27",
    image: "/placeholder.svg?height=200&width=200",
    slug: "h1-tape/scotch-27",
  },
  {
    name: "Scotch 130C",
    image: "/placeholder.svg?height=200&width=200",
    slug: "h1-tape/scotch-130c",
  },
  {
    name: "Copper Sheilding Tape",
    image: "/placeholder.svg?height=200&width=200",
    slug: "copper-sheilding-tape",
  },
  {
    name: "Cable Jacket Repair Tape",
    image: "/placeholder.svg?height=200&width=200",
    slug: "cable-jacket-repair-tape",
  },
  {
    name: "Monoplast",
    image: "/placeholder.svg?height=200&width=200",
    slug: "weather-proof-maistic-tape/monoplast",
  },
  {
    name: "Scotch Fil",
    image: "/placeholder.svg?height=200&width=200",
    slug: "weather-proof-maistic-tape/scotch-fil",
  },
];

export default function Component() {
  const router = useRouter();

  const handleCardClick = (slug: string) => {
    router.push(`/3m/tapes/${slug}`);
  };

  const pathName = usePathname();
  
  // Create dynamic breadcrumbs
  const pathSegments = pathName
    .split("/")
    .filter(Boolean)
    .map((segment, index, array) => {
      const path = "/" + array.slice(0, index + 1).join("/");
      return { name: segment, path };
    });

  // Add "Products" as the first breadcrumb
  const breadcrumbs = [
    { name: "Products", path: "/products" },
    ...pathSegments,
  ];

  return (
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col md:flex-row overflow-visible cursor-pointer hover:shadow-lg transition-shadow"
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
  );
}
