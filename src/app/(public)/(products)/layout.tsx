"use client";

import Header from "@/components/header";
import Navigation from "@/components/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  // Build breadcrumbs dynamically
  const pathSegments = pathName
    .split("/")
    .filter(Boolean)
    .map((segment, index, array) => {
      const path = "/" + array.slice(0, index + 1).join("/");
      return { name: segment, path };
    });

  const breadcrumbs =
    pathName === "/products"
      ? []
      : [{ name: "Products", path: "/products" }, ...pathSegments];

  return (
    <main className="bg-gray-50">
      <Header />
      <section className="relative overflow-visible">
        <Navigation />

        {/* Hero Banner */}
        <div className="relative w-full aspect-[2.73/1] sm:h-[400px] md:h-[500px] min-h-[240px]">
          {/* Background Image */}
          <Image
            src="/Banners/test banner 2.png"
            alt="Products Banner"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/20 sm:bg-black/10"></div>

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md mb-3">
              Products
            </h1>

            {breadcrumbs.length > 0 && (
              <nav className="flex flex-wrap items-center text-gray-400  text-xs sm:text-sm gap-x-1">
                {breadcrumbs.map((crumb, index) => (
                  <div key={crumb.path} className="flex items-center">
                    {index > 0 && (
                      <span className="mx-1 sm:mx-2 text-gray-400">›</span>
                    )}
                    <Link
                      href={crumb.path}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.name.toUpperCase()}
                    </Link>
                  </div>
                ))}
              </nav>
            )}
          </div>
        </div>
      </section>

      {/* Page Content */}
     <main className="flex-1 px-3 sm:px-6 md:px-10 my-8 sm:my-12">{children}</main> 
    </main>
  );
}
