"use client"

import { Card } from "@/components/card";
import { Button } from "@/components/Elements/button";
import { Filter } from "@/components/filter";
import { JobsHeader } from "@/components/jobs-header";
import { SearchInput } from "@/components/search-input";
import { useFetchJobs } from "@/hooks/useFetchJobs";
import { MoveLeft } from "lucide-react";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const FindJobs = () => {
  const [query, setQuery] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [employmentType, setEmploymentType] = useState<string>("")
  const [workNature, setWorkNature] = useState<string>("")
  const [datePosted, setDatePosted] = useState<string>("all")

  const url = `https://api.openwebninja.com/jsearch/search-v2?query=${query}&country=${country}&employment_types=${employmentType}&work_from_home=${workNature}&date_posted=${datePosted}`
  const { data: jobs, isFetching, isError, refetch } = useFetchJobs(url, query)

  if (isError) {
    return <section className="w-full min-h-[100vh] flex justify-center items-center px-2 md:mt-20 text-5xl text-red-500">
        Something went wrong. Search could not be completed
      </section>
  }

  return(
    <main className="w-full min-h-[100vh] px-5 lg:px-20 py-8 bg-brand-pale">
      <Button>
        <Link href={"/"} className="w-fit h-fit flex items-center gap-x-2 px-6 py-2 text-brand-offwhite font-light bg-brand-black rounded-md">
          <MoveLeft size={15}/>
          <p>Go back</p>
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
        workNature={workNature}
        setWorkNature={setWorkNature}
        datePosted={datePosted}
        setDatePosted={setDatePosted}
      />
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mt-10">
        {jobs && <Card jobs={jobs} />}
      </section>
      <section className="flex justify-center md:mt-20 text-5xl text-brand-orange/30">
        {!jobs && "Search for jobs"}
      </section>
      <section className="flex justify-center md:mt-20 text-5xl text-brand-orange/30">
        {jobs?.length === 0 && "No jobs found!"}
      </section>
    </main>
  )
};

export default FindJobs