"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ProductFiltersProps {
  categories: string[];
  subCategories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
  selectedSubCategory: string | null;
  setSelectedSubCategory: (sub: string | null) => void;
}

export default function ProductFilters({
  categories,
  subCategories,
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
}: ProductFiltersProps) {
  const [openCat, setOpenCat] = useState(true);
  const [openSub, setOpenSub] = useState(true);

  const handleCategoryClick = (cat: string) => {
    if (selectedCategory === cat) {
      setSelectedCategory(null);
      setSelectedSubCategory(null); // clear subs if category is deselected
    } else {
      setSelectedCategory(cat);
      setSelectedSubCategory(null); // reset subs when switching category
    }
  };

  const handleSubCategoryClick = (sub: string) => {
    if (selectedSubCategory === sub) {
      setSelectedSubCategory(null);
    } else {
      setSelectedSubCategory(sub);
    }
  };

  const clearAll = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
  };

  return (
    <div className="p-4 border rounded-lg w-64 bg-white shadow-md">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold">Filters</h3>
        {(selectedCategory || selectedSubCategory) && (
          <button
            onClick={clearAll}
            className="text-sm text-blue-600 hover:underline"
            aria-label="Clear filters"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Dropdown */}
      <div className="mb-4">
        <button
          onClick={() => setOpenCat(!openCat)}
          className="w-full flex justify-between items-center font-semibold mb-2 text-gray-800"
          aria-expanded={openCat}
        >
          Categories
          <ChevronDown
            className={`h-4 w-4 transition-transform ${openCat ? "rotate-180" : ""}`}
          />
        </button>

        {openCat && (
          <div className="pl-2 grid gap-1">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={active}
                  onClick={() => handleCategoryClick(cat)}
                  className={`w-full text-left px-3 py-2 rounded flex items-center justify-between text-sm transition ${
                    active ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                  }`}
                >
                  <span>{cat}</span>
                  {active && <span className="text-xs text-blue-600">Selected</span>}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Subcategory Dropdown */}
      {subCategories.length > 0 && (
        <div>
          <button
            onClick={() => setOpenSub(!openSub)}
            className="w-full flex justify-between items-center font-semibold mb-2 text-gray-800"
            aria-expanded={openSub}
          >
            Subcategories
            <ChevronDown
              className={`h-4 w-4 transition-transform ${openSub ? "rotate-180" : ""}`}
            />
          </button>

          {openSub && (
            <div className="pl-2 grid gap-1">
              {subCategories.map((sub) => {
                const active = selectedSubCategory === sub;
                return (
                  <button
                    key={sub}
                    type="button"
                    aria-pressed={active}
                    onClick={() => handleSubCategoryClick(sub)}
                    className={`w-full text-left px-3 py-2 rounded flex items-center justify-between text-sm transition ${
                      active ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                    }`}
                  >
                    <span>{sub}</span>
                    {active && <span className="text-xs text-blue-600">Selected</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
