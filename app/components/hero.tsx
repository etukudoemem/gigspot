import { MoveUpRight } from "lucide-react";
import { Button } from "./Elements/button";
import Link from "next/link";
import Image from "next/image";
import svgOne from "../../public/face.svg";
import ringOne from "../../public/ring.png";
import ringTwo from "../../public/ring-2.png";
import svgThree from "../../public/woman.svg";
import svgFour from "../../public/business.svg";

export const Hero = () => {

  return(
    <main className="relative w-full flex flex-col justify-center items-center">
      <Image 
        src={svgOne}
        alt="image"
        height={100}
        width={80}
        className="hidden xl:block absolute left-10 top-10 xl:left-40 rotate-330"
      />
      <Image 
        src={ringOne}
        alt="image"
        height={100}
        width={80}
        className="hidden 2xl:block absolute right-10 bottom-2 2xl:right-80"
      />
      <Image 
        src={ringTwo}
        alt="image"
        height={100}
        width={80}
        className="hidden 2xl:block absolute right-10 bottom-2 2xl:right-80"
      />
      <Image 
        src={svgThree}
        alt="image"
        height={50}
        width={50}
        className="hidden xl:block absolute w-10 h-10 bg-brand-green rounded-xl rotate-30 bottom-10 xl:left-80"
      />
      <Image 
        src={svgFour}
        alt="image"
        height={60}
        width={60}
        className="hidden xl:block absolute right-10 bottom-10 lg:right-60 md:top-5 bg-brand-lilac rounded-2xl rotate-30 "
      />
      <h2 className="relative md:w-[70%] text-5xl md:text-7xl font-medium text-center text-brand-text leading-tight">
        Find work <br /><span className="text-brand-orange">that fits your life</span><span className="absolute bottom-5 w-2 h-2 bg-brand-orange rounded-full"></span>
      </h2>
      <p className="w-[80%] md:w-[35%] text-brand-text text-lg text-center mt-6">
        Browse through hand-picked opportunities across design, engineering, marketing, and more. Search by role, location, and how you want to work.
      </p>
      <Button className="w-fit px-6 py-3 md:py-2 text-brand-black bg-brand-orange mt-7 rounded-md shadow-[0px_4px_45px_0px_#00000014]">
        <Link href={"/find-jobs"} className="flex items-center gap-x-2">
          <span>Get Started</span>
          <MoveUpRight size={14}/>
        </Link>
      </Button>
    </main>
  )
};