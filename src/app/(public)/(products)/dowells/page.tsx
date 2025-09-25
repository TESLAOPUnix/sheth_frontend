"use client";

import { Card, CardContent } from "@/components/ui/card";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft,Home } from "lucide-react";
import Link from "next/link";
import Cart from "@/components/cart";

const products = [
  {
    name: "Lugs",
    image: "/lugs.png",
    slug: "lugs",
  },
  {
    name: "Glands",
    image: "/dowells/gland/pg/img1.png",
    slug: "glands",
  },
  {
    name: "Crimping Paste",
    image: "/dowells/cp/img1.png",
    slug: "crimping-paste",
  },
];

export default function Component() {
  const router = useRouter();

  const handleCardClick = (slug: string) => {
    router.push(`/dowells/${slug}`);
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
         <div className="w-full max-w-8xl mx-auto px-4 py-8 space-y-10">
      {/* ---------- Description Section ---------- */}
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
       <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
  Dowells – Engineered Terminals & Splices for Reliable Connections
</h1>

<p className="text-gray-600 leading-relaxed">
  Dowells terminals and splices are extensively engineered for use in large power cables and electrical leads, making them ideal for power generation, distribution systems, and heavy-duty equipment such as generators, motors, and panel boards. Designed to support a wide range of copper and aluminium conductors (up to 1000 mm²), they provide the perfect balance of reliability, flexibility, and cost-effectiveness.
</p>

<p className="text-gray-600 leading-relaxed">
  The Dowells product range includes a wide variety of terminals and splices to suit diverse customer requirements. With a focus on solving practical electrical challenges, Dowells ensures that every product delivers the most technically sound and appropriate solution.
</p>

<h2 className="text-xl font-semibold text-gray-700 mt-4">
  Compression Crimping Excellence
</h2>
<p className="text-gray-600 leading-relaxed">
  Dowells uses a precision compression crimping method for terminating electrical wires, ensuring a mechanical, uniform, and repeatable crimp every time. Unlike soldering, this method eliminates variables such as melting temperature, oxidation, or entrapped gases. The result is a termination that consistently meets the highest mechanical strength and electrical conductivity standards.
</p>

<h2 className="text-xl font-semibold text-gray-700 mt-4">
  Quality & Finish
</h2>
<ul className="list-disc pl-5 text-gray-600 space-y-2">
  <li>
    Manufactured from oxygen-free, high-conductivity seamless copper tubes for maximum electrical efficiency.
  </li>
  <li>
    Special tin plating process prevents corrosion and guarantees long-term, trouble-free service.
  </li>
  <li>
    Unique design with double-thick tongues and short transfer sections provides a strong grip and ensures superior electrical and mechanical performance.
  </li>
</ul>

<h2 className="text-xl font-semibold text-gray-700 mt-4">
  Our Dowells Product Range Covers
</h2>
<ul className="list-disc pl-5 text-gray-600 space-y-2">
  <li>
    <strong>Cable End Terminals (Copper & Aluminium) –</strong> Durable lugs designed for maximum conductivity and safety.
  </li>
  <li>
    <strong>Cable Glands –</strong> Strong, protective glands for safe cable entry and sealing in panels and equipment.
  </li>
  <li>
    <strong>Crimping Tools & Accessories –</strong> Precision tools ensuring accurate crimping for secure installations.
  </li>
</ul>

      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col md:flex-row overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleCardClick(product.slug)}
            >
               <div className="w-full md:w-1/2 h-48 md:h-auto">
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
  );
}
