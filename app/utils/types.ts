import { Dispatch, SetStateAction } from "react";
import type { LucideIcon } from "lucide-react";

export type SelectProps = {
    label: string; 
    value: string; 
};

export type FilterProps = {
  country: string
  employmentType: string
  jobNature: string
  requirement: string
  setCountry: Dispatch<SetStateAction<string>>
  setEmploymentType: Dispatch<SetStateAction<string>>
  setJobNature: Dispatch<SetStateAction<string>>
  setRequirement: Dispatch<SetStateAction<string>>
};

export type HowCardContent = {
  id: number,
  title: string,
  description: string,
  icon: LucideIcon,
  backgroundColor: string
};

export type SearchInputProps = {
  query: string,
  setQuery: React.Dispatch<SetStateAction<string>>,
  isFetching: boolean,
  refetch: () => Promise<any>
};

export type SelectInputProps = {
  items: SelectProps[],
  filterType: string
  setItem: Dispatch<SetStateAction<string>>
};