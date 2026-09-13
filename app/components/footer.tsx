import Link from "next/link";
import { Logo } from "./Elements/logo";

export const Footer = () => {

  return(
    <footer>
      <div className="w-full h-[1px] bg-gray-300 px-5 mb-10"></div>
      <section className="lg:w-1/2 flex flex-col gap-y-10 lg:flex-row lg:justify-between text-brand-text">
        <div>
          <Logo />
          <p className="lg:w-[50%] text-brand-text mt-2">
            Helping people find meaningful work and helping companies build great teams.
          </p>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-brand-orange">
            For job seekers
          </h5>
          <Link href={'/find-jobs'} className="hover:text-brand-link">
            Browse jobs
          </Link>
        </div>
      </section>
      <section className="flex justify-center text-xs mt-20">
        <p>&copy; 2026 gigspot Board. All rights reserved.</p>
      </section>
    </footer>
  )
};