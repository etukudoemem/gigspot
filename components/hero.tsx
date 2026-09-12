import { MoveUpRight } from "lucide-react";
import { Button } from "./Elements/button";
import Link from "next/link";
import Image from "next/image";
import svgOne from "../public/face.svg";
import ringOne from "../public/ring.png";
import ringTwo from "../public/ring-2.png";
import svgThree from "../public/woman.svg";
import svgFour from "../public/business.svg";

export const Hero = () => {

  return(
    <main className="relative w-full flex flex-col justify-center items-center">
      <Image 
        src={svgOne}
        alt="image"
        height={100}
        width={80}
        className="absolute left-10 top-10 md:left-40 md:top-5 rotate-330"
      />
      <Image 
        src={ringOne}
        alt="image"
        height={100}
        width={80}
        className="absolute right-10 top-10 md:right-100 md:top-5"
      />
      <Image 
        src={ringTwo}
        alt="image"
        height={100}
        width={80}
        className="absolute right-10 top-10 md:right-110 md:top-2"
      />
      <Image 
        src={svgThree}
        alt="image"
        height={50}
        width={50}
        className="absolute w-10 h-10 bg-brand-green rounded-2xl rotate-30 left-10 bottom-10 md:left-80 md:bottom-5"
      />
      <Image 
        src={svgFour}
        alt="image"
        height={60}
        width={60}
        className="absolute right-10 bottom-10 md:right-60 md:top-5 bg-brand-lilac rounded-2xl rotate-30"
      />
      <h2 className="relative md:w-[70%] text-7xl font-medium text-center text-brand-text leading-tight">
        Find work <br /><span className="text-brand-orange">that fits your life</span><span className="absolute bottom-5 w-2 h-2 bg-brand-orange rounded-full"></span>
      </h2>
      <p className="w-[70%] md:w-[35%] text-brand-text text-lg text-center mt-6">
        Browse through hand-picked opportunities across design, engineering, marketing, and more. Search by role, location, and how you want to work.
      </p>
      <Button className="w-fit px-6 py-2 text-brand-black font-medium bg-brand-orange mt-7 rounded-md">
        <Link href={"/find-jobs"} className="flex items-center gap-x-2">
          <span>Get Started</span>
          <MoveUpRight size={14}/>
        </Link>
      </Button>
    </main>
  )
};