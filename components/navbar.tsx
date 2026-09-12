import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./Elements/button";
import { Logo } from "./Elements/logo";

export const Navbar = () => {

    return(
      <nav className="w-full flex justify-between items-center py-8">
        <Logo />
        <Button className="flex items-center gap-x-5">
          <Link href={"/find-jobs"} className="w-fit flex gap-x-2 items-center px-6 py-2 font-light text-sm bg-brand-black text-brand-offwhite rounded-md">
            Find Jobs <MoveUpRight size={13}/>
          </Link>
        </Button>
      </nav>
    )
};