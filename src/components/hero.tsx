
import Navigation from "./nav";
import { Button } from "./ui/button";
import Carousel from "./carousel";


export default function Hero() {

  return (
    <section className="relative h-[600px] overflow-hidden  bg-gray-50">
      <Navigation />
      {/* Carousel with fade transition */}
      <Carousel />

      <div className="container relative mx-auto px-4 py-20 max-w-[76rem] mt-[4rem]">
        <div className="max-w-3xl">
          <h2 className="mb-4 text-lg font-medium text-white">
            WELCOME TO SHETH TRADING CORPORATION
          </h2>
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            YOUR TRUSTED PARTNER FOR 3M AND DOWELL&apos;S
          </h1>
        </div>
        <a href="/products">
          <Button
            variant="default"
            className="bg-[#5C1E1E] hover:bg-[#4A1818] text-[1.1rem] mt-8 font-medium p-[1rem]"
          >
            <span>Our Products</span>
          </Button>
        </a>
      </div>
    </section>
  );
}
