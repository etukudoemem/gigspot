"use client"

import { Card } from "@/app/components/card";
import { Button } from "@/app/components/Elements/button";
import { Filter } from "@/app/components/filter";
import { JobsHeader } from "@/app/components/jobs-header";
import { SearchInput } from "@/app/components/search-input";
import { useFetchJobs } from "@/app/hooks/useFetchJobs";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Loader } from "../components/Elements/spinner";

const FindJobs = () => {
  const [query, setQuery] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [employmentType, setEmploymentType] = useState<string>("")
  const [jobNature, setJobNature] = useState<string>("")
  const [requirement, setRequirement] = useState<string>("")

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/search-v2?query=${query}&country=${country}&employment_types=${employmentType}&work_from_home=${jobNature}&job_requirements=${requirement}&num_pages=4`
  const { data: jobs, isFetching, isError, refetch } = useFetchJobs(url, query)

  return(
    <main className="w-full min-h-[100vh] px-5 lg:px-20 py-8 bg-brand-pale">
      <Button>
        <Link href={"/"} className="w-fit h-fit flex items-center gap-x-2 px-6 py-2 text-brand-offwhite font-light bg-brand-black rounded-md">
          <MoveLeft size={15}/>
          <p>Back</p>
        </Link>
      </Button>
      <section className="mt-10">
        <JobsHeader />
      </section>
      <section className="w-full flex flex-col xl:flex-row gap-x-4 gap-y-4 justify-between mt-10">
      <SearchInput query={query} setQuery={setQuery} isFetching={isFetching} refetch={refetch} />
      <Filter 
        country={country} 
        setCountry={setCountry} 
        employmentType={employmentType} 
        setEmploymentType={setEmploymentType}
        jobNature={jobNature}
        setJobNature={setJobNature}
        requirement={requirement}
        setRequirement={setRequirement}
      />
      </section>
      { 
        isFetching ? <Loader /> :
        (<div className="w-full flex flex-col mt-5 md:mt-30">
          <section className="flex justify-center text-4xl text-center md:text-5xl text-brand-orange/80">
            {isError && "Error! Search could not be completed."}
          </section>
          <section className="grid gap-4 grid-rows-3 md:grid-cols-2 xl:grid-cols-3">
            {jobs && <Card jobs={jobs} />}
          </section>
          <section className="flex justify-center text-4xl text-center md:text-5xl -mt-5 text-brand-orange/80">
            {!jobs && !isError && "Search for jobs"}
          </section>
          <section className="flex justify-center text-4xl text-center md:text-5xl -mt-5 text-brand-orange/80">
            {jobs?.length === 0 && "No jobs found!"}
          </section>
        </div>)
      }
    </main>
  )
};

export default FindJobs