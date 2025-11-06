import Header from "@/components/header";
import Navigation from "@/components/nav";
import Image from "next/image";
import ContactSection from "@/components/contact";
import StepsGuide from "@/components/steps";

export default function Page() {
  return (
    <main className="bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Navigation />

        {/* Banner Container */}
       <div className="relative w-full aspect-[2.73/1] sm:h-[400px] md:h-[500px] min-h-[240px]">
           {/* Background Image */}
           <Image
             src="/Banners/banner 2.png"
             alt="Banner"
             fill
             className="object-cover"
             priority
           />
       
           {/* Optional dark overlay for readability */}
           <div className="absolute inset-0 bg-black/20 sm:bg-black/10"></div>
       
           {/* Overlay content */}
           <div className="absolute inset-0 flex items-center px-4 sm:px-10">
             <h1
               className="
                 text-3xl font-bold text-white drop-shadow-md 
                 sm:text-4xl md:text-5xl lg:text-6xl
               "
             >
               Contact Us
             </h1>
           </div>
         </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16">
        <ContactSection />
      </section>

      <StepsGuide />
    </main>
  );
}
