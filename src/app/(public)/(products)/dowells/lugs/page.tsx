"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import { lugsProducts } from "@/data/lugs";
import { X } from "lucide-react";

export default function LugsPage() {
  // ✅ filter states
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [showFilterModal, setShowFilterModal] = useState(false);

  // ✅ unique category and subcategory lists
  const categories = Array.from(new Set(lugsProducts.map((p) => p.category)));

  const subCategories = useMemo(() => {
    if (!selectedCategory) {
      return Array.from(new Set(lugsProducts.map((p) => p.subcategory)));
    }
    return Array.from(
      new Set(
        lugsProducts
          .filter((p) => p.category === selectedCategory)
          .map((p) => p.subcategory)
      )
    );
  }, [selectedCategory]);

  // ✅ filtered product list
  const filteredProducts = useMemo(() => {
    return lugsProducts.filter((p) => {
      const categoryMatch = !selectedCategory || p.category === selectedCategory;
      const subCategoryMatch = !selectedSubCategory || p.subcategory === selectedSubCategory;
      return categoryMatch && subCategoryMatch;
    });
  }, [selectedCategory, selectedSubCategory]);

  return (
    <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-50 px-4 py-8">
      {/* Filters (desktop) */}
      <div className="hidden md:block md:col-span-1">
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

      {/* ---------- Floating Filter Button (Mobile) ---------- */}
      <button
        onClick={() => setShowFilterModal(true)}
        className="fixed bottom-6 left-6 z-50 bg-[#5C1E1E] text-white px-5 py-3 rounded-full shadow-lg md:hidden"
      >
        Filter
      </button>

      {/* ---------- Filter Modal (Mobile) ---------- */}
      {showFilterModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-end md:hidden">
          <div className="bg-white w-full max-h-[85vh] rounded-t-2xl p-5 overflow-y-auto animate-slide-up">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
              <button
                onClick={() => setShowFilterModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Filters Content */}
            <ProductFilters
              categories={categories}
              subCategories={subCategories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSubCategory={selectedSubCategory}
              setSelectedSubCategory={setSelectedSubCategory}
            />

            {/* Apply Button */}
            <button
              onClick={() => setShowFilterModal(false)}
              className="mt-4 w-full bg-[#5C1E1E] text-white py-3 rounded-lg font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* ---------- Animation ---------- */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
