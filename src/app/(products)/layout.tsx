"use client";

import Navigation from "@/components/nav-3";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Cart from "@/components/cart";
import { useState } from "react";
import { useVisibility } from "../provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isVisible } = useVisibility();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="relative">
      <Navigation alwaysVisible={true} />
      <div className="mx-[1rem] md:mx-[6rem] flex items-center justify-between fixed top-[11rem] md:top-[13rem] lg:top-[11rem] left-0 right-0 z-40">
        <Button
          variant="secondary"
          className="flex items-center "
          onClick={handleBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="hidden sm:block ">Back</span>
        </Button>
        <h1 className="text-3xl font-bold text-center flex-grow"></h1>
        <div className="pr-[1rem]">{isVisible && <Cart />}</div>
      </div>
      <div className=" mx-auto  mt-[5rem] md:mt-[7rem] lg:mt-[5rem]">{children}</div>
    </div>
  );
}
