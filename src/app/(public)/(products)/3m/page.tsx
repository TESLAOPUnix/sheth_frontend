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
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-50">
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
    );
}
