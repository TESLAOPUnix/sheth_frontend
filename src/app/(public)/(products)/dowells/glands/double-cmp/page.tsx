"use client";

import { Card, CardContent } from "@/components/ui/card";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft,Home } from "lucide-react";
import Link from "next/link";
import Cart from "@/components/cart";

const products = [
  {
    name: "For Armoured",
    image: "/placeholder.svg?height=200&width=200",
    slug: "arm",
  },
  {
    name: "For Unamoured",
    image: "/placeholder.svg?height=200&width=200",
    slug: "unarm",
  },
];

export default function Component() {
  const router = useRouter();

  const handleCardClick = (slug: string) => {
    router.push(`/dowells/glands/double-cmp/${slug}`);
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
    <div className="flex flex-col justify-center w-full mx-auto min-h-screen bg-background relative">
      {/* Hero Section */}

      <section className="relative h-[400px] overflow-visible mb-[2rem]">
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
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.path} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-gray-400">›</span>}
                  <Link
                    href={crumb.path}
                    className="text-gray-300 font-medium hover:text-gray-100 transition-colors"
                  >
                    {crumb.name.toUpperCase()}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </section>

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
    </div>
  );
}
