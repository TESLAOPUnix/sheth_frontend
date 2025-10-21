"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string;
  subcategory: string;
  slug?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${product.slug}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="h-40 w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      <CardContent className="flex-1 flex flex-col p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
      </CardContent>
    </Card>
  );
}
