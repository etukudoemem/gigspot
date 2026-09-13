import { companyInitials } from "@/app/utils/helpers"
import { BriefcaseBusiness, Clock4, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const Card = ({ jobs }: { jobs: any }) => {

  return(
    <>
      {jobs? jobs.map((job: any) => 
      <a 
        href={job?.job_apply_link}
        target="_blank"
        key={job?.job_id} 
        className="min-h-auto flex flex-col gap-y-3 p-4 text-brand-text text-md border-1 border-gray-300 rounded-xl shadow-[0px_4px_45px_0px_#00000014]">
        <section className="flex items-center gap-x-4">
          <div className="min-w-12 min-h-12 relative flex items-center justify-center self-start bg-brand-green rounded-md">
            {job?.employer_logo ? <Image src={job?.employer_logo} alt="employer logo" fill className="bg-contain rounded-[inherit]"/> : <p className="text-xl">{companyInitials(job?.employer_name)}</p>}
          </div>
          <div>
            <h4 className="text-lg font-medium">{job?.job_title}</h4>
            <span className="text-md">{job?.employer_name}</span>
          </div>
        </section>
        <p className="line-clamp-2">
          {job?.job_description}
        </p>
        <section className="flex items-center gap-x-2">
          <span className="min-w-fit h-fit px-2 py-[1px] text-sm bg-brand-green rounded-4xl">{job?.job_employment_type}</span>
          <span className="min-w-fit h-fit px-2 py-[1px] text-sm border border-brand-green rounded-4xl">{job?.job_is_remote ? "Remote" : "On-site"}</span>
        </section>
        <section className="flex gap-x-4 items-center">
          <span className="flex items-center gap-x-1"><MapPin size={15}/>{job?.job_location}</span>
          <span className="flex items-center gap-x-1"><Clock4 size={15}/>{job?.job_posted_at !== null ? job?.job_posted_at: "Not Available"}</span>
        </section>
        <section className="flex gap-x-4 items-center">
          {job?.job_max_salary !== null ? <span className="flex items-center gap-x-1"><BriefcaseBusiness size={15}/>${job?.job_min_salary} - ${job?.job_max_salary}</span> : null}
        </section>
      </a>) : null}
      </>
  );
};