import { BriefcaseBusiness } from "lucide-react";

export const Logo = () => {

  return(
    <div className="relative w-50 flex items-center gap-x-1 ">
      <div className="w-5 h-4 flex justify-center items-center bg-brand-orange rounded">
        <BriefcaseBusiness className="text-brand-offwhite" size={10}/>
      </div>
      <h4 className="font-medium relative text-brand-black">
          gig<span className="">spot</span>
          <span className="absolute w-2 h-2 rounded-full bg-brand-orange"></span>
      </h4>
    </div>
  )
};