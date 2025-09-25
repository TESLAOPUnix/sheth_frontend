"use client";

import { useState, useMemo } from "react";
import ProductCard from "../dowells/lugs/ProductCard";       // ✅ reuse
import ProductFilters from "../dowells/lugs/ProductFilters";  // ✅ reuse
import { threeMProducts } from "@/data/threem";

export default function ThreeMPage() {
    // ✅ single-select states
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  
    // Categories list
    const categories = Array.from(new Set(threeMProducts.map((p) => p.category)));
  
    // Subcategories list (dependent on selected category)
    const subCategories = useMemo(() => {
      if (!selectedCategory) {
        return Array.from(new Set(threeMProducts.map((p) => p.subcategory)));
      }
      return Array.from(
        new Set(
          threeMProducts
            .filter((p) => p.category === selectedCategory)
            .map((p) => p.subcategory)
        )
      );
    }, [selectedCategory]);
  
    // Filtered products
    const filteredProducts = useMemo(() => {
      return threeMProducts.filter((p) => {
        const categoryMatch = !selectedCategory || p.category === selectedCategory;
        const subCategoryMatch = !selectedSubCategory || p.subcategory === selectedSubCategory;
        return categoryMatch && subCategoryMatch;
      });
    }, [selectedCategory, selectedSubCategory]);
  
    return (
          <div className="w-full max-w-8xl mx-auto px-4 py-8 space-y-10">
      {/* ---------- Description Section ---------- */}
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          3M – Global Innovation, India’s Trusted Choice
        </h1>
        <p className="text-gray-600 leading-relaxed">
          3M is a global leader in science and innovation, delivering advanced solutions
          across industries for over a century. In the electrical and energy sector, 3M
          products are synonymous with safety, reliability, and performance, making them a
          preferred choice for engineers and project owners worldwide.
        </p>
        <p className="text-gray-600 leading-relaxed">
          In India, 3M is one of the most widely approved and accepted brands for electrical
          installations. Its products are trusted not only by leading private sector
          industries, EPC contractors, and OEMs, but also by government utilities and public
          sector enterprises for critical projects in power distribution and infrastructure.
        </p>
        <p className="text-gray-600 leading-relaxed">
          As an authorized distributor, Sheth Trading Corporation proudly supplies certified
          3M products, ensuring clients receive authentic solutions backed by both global
          expertise and local service support.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Our 3M Product Range
        </h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>
            <strong>Heat Shrink Cable Jointing Kits –</strong> Industry standard for
            medium- and high-voltage cable networks, providing robust insulation,
            mechanical protection, and long-term reliability.
          </li>
          <li>
            <strong>Insulation Sealer Spray –</strong> Quick, effective protection against
            moisture ingress, enhancing electrical safety and preventing breakdowns.
          </li>
          <li>
            <strong>Busbar Sleeves –</strong> High-quality insulation sleeves ensuring safe
            operation, mechanical durability, and extended busbar life.
          </li>
          <li>
            <strong>Cable Jointing Compound –</strong> Specialized compound for secure
            sealing and dependable performance in critical jointing applications.
          </li>
          <li>
            <strong>Electrical Tapes –</strong> Known for superior adhesion, flexibility,
            and resistance, widely used in both government and private projects.
          </li>
        </ul>
      </div>
        {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-50">
        {/* Filters */}
        <div className="md:col-span-1">
          <ProductFilters
            categories={categories}
            subCategories={subCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
          />
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
    );
}
