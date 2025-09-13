"use client";

import { Card, CardContent } from "@/components/ui/card";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft,Home } from "lucide-react";
import Link from "next/link";
import Cart from "@/components/cart";

const products = [
  {
    name: "Inline Connector",
    image: "/placeholder.svg?height=200&width=200",
    slug: "inline-connector",
  },
  {
    name: "Terminal",
    image: "/placeholder.svg?height=200&width=200",
    slug: "terminal",
  },
];

export default function Component() {
  const router = useRouter();

  const handleCardClick = (slug: string) => {
    router.push(`/dowells/lugs/bi-mettalic/${slug}`);
  };

  const handleBack = () => {
    router.back();
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
  );
}
