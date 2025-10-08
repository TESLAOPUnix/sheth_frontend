import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b py-4 w-full bg-gray-100">
      <div className="px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* TOP: Logos */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* LEFT: Sheth Logo */}
          <Image
            src="/sheth_logo.png"
            alt="Sheth Trading Corporation Logo"
            width={400}
            height={60}
            className="h-auto w-32 sm:w-44 md:w-60"
          />

          {/* RIGHT: Partner Logos */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Image
              src="/msme_logo.png"
              alt="Partner Logo 1"
              width={35}
              height={35}
              className="sm:w-[45px] sm:h-[45px]"
            />
            <Image
              src="/gem_logo.png"
              alt="Partner Logo 2"
              width={35}
              height={35}
              className="sm:w-[45px] sm:h-[45px]"
            />
            <Image
              src="/ireps_logo.png"
              alt="Partner Logo 3"
              width={35}
              height={35}
              className="sm:w-[45px] sm:h-[45px]"
            />
          </div>
        </div>

        {/* BOTTOM/RIGHT: Mail + Call */}
        <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
          {/* Email link */}
          <div className="flex items-center gap-2 text-sm hover:underline">
            <Mail className="h-4 w-4" />
            <a href="mailto:shethtrd@gmail.com" className="break-all">
              shethtrd@gmail.com
            </a>
          </div>

          {/* Call us button */}
          <a href="tel:+9103322379239" className=" w-full max-w-[200px]">
    <Button
      variant="default"
      className="bg-[#5C1E1E] hover:bg-[#4A1818] flex items-center w-full"
    >
      <Phone className="mr-1">Call us</Phone>
      <span className="mr-16">Call us</span>
    </Button>
  </a>
        </div>
      </div>
    </header>
  )
}
