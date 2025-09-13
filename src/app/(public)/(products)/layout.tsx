"use client";

import Header from "@/components/header";
import Navigation from "@/components/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      ? [] // no breadcrumbs on main products page
      : [{ name: "Products", path: "/products" }, ...pathSegments];

  return (
    <div className="bg-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Navigation />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/terms.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative mx-auto px-4 py-20 max-w-[76rem] mt-[4rem]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Products
            </h1>

            {breadcrumbs.length > 0 && (
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
            )}
          </div>
        </div>
      </section>

      {/* Page Content */}
      <main className="my-[3rem]">{children}</main>
    </div>
  );
}
