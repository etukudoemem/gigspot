"use client"

import { Dispatch, SetStateAction } from "react";
import { SelectInput } from "./select-input";

interface SelectProps {
    label: string; 
    value: string; 
}

interface FilterProps {
  country: string
  employmentType: string
  workNature: string
  datePosted: string
  setCountry: Dispatch<SetStateAction<string>>
  setEmploymentType: Dispatch<SetStateAction<string>>
  setWorkNature: Dispatch<SetStateAction<string>>
  setDatePosted: Dispatch<SetStateAction<string>>
}

export const Filter = ({
  country, 
  employmentType,
  workNature, 
  datePosted, 
  setCountry, 
  setEmploymentType, 
  setWorkNature, 
  setDatePosted
}: FilterProps) => {
  
  const countries: SelectProps[] = [
    { label: "Country", value: "" },
    { label: "United States", value: "us" },
    { label: "United Kingdom", value: "uk" },
    { label: "France", value: "fr" },
  ]

  const employmentTypes: SelectProps[] = [
    { label: "Employement type", value: "" },
    { label: "Full time", value: "FULLTIME" },
    { label: "Contractor", value: "CONTRACTOR" },
    { label: "Part time", value: "PARTTIME" },
    { label: "Intern", value: "INTERN" },
  ]

  const natureOfJob: SelectProps[] = [
    { label: "Job nature", value: "" },
    { label: "Remote", value: "true" },
    { label: "On-site", value: "false" },
  ]

  const date: SelectProps[] = [
    { label: "Date posted", value: "all" },
    { label: "Today", value: "today" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
  ]

  console.log(country, employmentType)

  return(
    <div className="xl:w-1/2 flex flex-col md:flex-row gap-y-4 gap-x-2 items-center p-4 py-5 border-1 border-gray-300 rounded-xl shadow-[0px_4px_45px_0px_#00000014]">
      <h3 className="justify-self-start self-start text-xl font-medium">
        Filters:
      </h3>
      {/* <Select value={country} onValueChange={(value) => setCountry(value!)}>
        <SelectTrigger className="w-1/2">
          <SelectValue placeholder={countries[0].label}/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
          {countries.map((item) => (
            <SelectItem key={item.value} value={item.label}>
            {item.label}
            </SelectItem>
          ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select value={employmentType} onValueChange={(value) => setEmploymentType(value!)}>
        <SelectTrigger className="w-1/2">
          <SelectValue placeholder={employmentTypes[0].label}/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
          {employmentTypes.map((item) => (
            <SelectItem key={item.value} value={item.label}>
            {item.label}
            </SelectItem>
          ))}
          </SelectGroup>
        </SelectContent>
      </Select> */}
        <SelectInput items={countries} filterType={country} setItem={setCountry} />
        <SelectInput items={employmentTypes} filterType={employmentType} setItem={setEmploymentType} />
        <SelectInput items={natureOfJob} filterType={workNature} setItem={setWorkNature} />
        <SelectInput items={date} filterType={datePosted} setItem={setDatePosted} />
    </div>
  )
}