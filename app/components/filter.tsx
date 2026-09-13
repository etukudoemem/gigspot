"use client"

import { SelectInput } from "./select-input";
import type { FilterProps } from "../utils/types";
import { countries, requirements, employmentTypes, natureOfJob } from "../utils/constants";

export const Filter = ({
  country, 
  employmentType,
  jobNature, 
  requirement, 
  setCountry, 
  setEmploymentType, 
  setJobNature, 
  setRequirement
}: FilterProps) => {
  
  return(
    <div className="xl:w-1/2 flex flex-col md:flex-row gap-y-4 gap-x-2 items-center p-4 py-5 border-1 border-gray-300 rounded-xl shadow-[0px_4px_45px_0px_#00000014]">
      <h3 className="self-start text-xl font-medium">
        Filters:
      </h3>
        <SelectInput items={countries} filterType={country} setItem={setCountry} />
        <SelectInput items={employmentTypes} filterType={employmentType} setItem={setEmploymentType} />
        <SelectInput items={natureOfJob} filterType={jobNature} setItem={setJobNature} />
        <SelectInput items={requirements} filterType={requirement} setItem={setRequirement} />
    </div>
  )
};