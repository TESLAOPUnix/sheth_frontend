"use client";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTopButton from "@/components/go-up";

import Navigation from "@/components/nav-2";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Cart from "@/components/cart";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="relative">
      <Navigation alwaysVisible={true} />
      <div className="mx-[1rem] md:mx-[6rem] flex items-center justify-between fixed top-[5rem] left-0 right-0 z-50">
        <Button
          variant="secondary"
          className="flex items-center "
          onClick={handleBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="hidden sm:block ">Back</span>
        </Button>
        <h1 className="text-3xl font-bold text-center flex-grow">
         
        </h1>
        <div className="pr-[1rem]">
          <Cart />
        </div>
      </div>
      <div className=" mx-auto mt-[0rem]">{children}</div>
    </div>
  );
}
