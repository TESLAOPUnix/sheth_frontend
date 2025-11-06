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
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Navigation />

        <div className="relative w-full min-h-[200px] sm:min-h-[300px] md:min-h-[450px]">
          <Image
            src="/Banners/test banner 2.png"
            alt="Products Banner"
            fill
            priority
            className="object-cover object-center bg-[#eeebeb]"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 100vw,
                   1200px"
          />

          <div className="container relative mx-auto px-4 py-10 sm:py-16 md:py-20 max-w-[76rem] mt-[3rem] sm:mt-[4rem]">
            <div className="max-w-2xl sm:max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray drop-shadow-md">
                Products
              </h1>

              {breadcrumbs.length > 0 && (
                <nav className="flex flex-wrap items-center text-gray text-xs sm:text-sm mt-3 sm:mt-4 gap-x-1">
                  {breadcrumbs.map((crumb, index) => (
                    <div key={crumb.path} className="flex items-center">
                      {index > 0 && (
                        <span className="mx-1 sm:mx-2 text-gray-400">›</span>
                      )}
                      <Link
                        href={crumb.path}
                        className="text-gray font-medium hover:text-white transition-colors"
                      >
                        {crumb.name.toUpperCase()}
                      </Link>
                    </div>
                  ))}
                </nav>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <main className="flex-1 px-3 sm:px-6 md:px-10 my-8 sm:my-12">{children}</main>
    </div>
  );
}
