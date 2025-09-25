import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
   <header className="border-b py-4 w-full bg-gray-100">
  <div className="flex items-center justify-between px-4">
    {/* LEFT: Logos */}
    <div className="flex items-center flex-wrap">
      <Image
        src="/sheth_logo.png"
        alt="Sheth Trading Corporation Logo"
        width={400}
        height={60}
        className="h-auto w-60"
      />
      <div className="flex items-center space-x-2 md:space-x-3 ml-2">
        <Image src="/msme_logo.png" alt="Partner Logo 1" width={50} height={50} />
        <Image src="/gem_logo.png" alt="Partner Logo 2" width={50} height={50} />
        <Image src="/ireps_logo.png" alt="Partner Logo 3" width={50} height={50} />
      </div>
    </div>

    {/* RIGHT: Mail + Call */}
   <div className="flex flex-col items-end gap-2 pr-4">
  {/* Email link (reference width) */}
  <div
    id="email-link"
    className="flex items-center gap-2 text-sm hover:underline -ml-4"
  >
    <Mail className="h-4 w-4" />
    <a href="mailto:shethtrd@gmail.com">shethtrd@gmail.com</a>
  </div>

  {/* Call us button with same width */}
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

