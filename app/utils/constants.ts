import { NotepadText, Search, Send } from "lucide-react";
import { HowCardContent, SelectProps } from "./types";

export const howCardContent: HowCardContent[] = [
  {
    id: 1,
    title: "Search smart",
    description: "Filter by role, location, job type, and experience required to find the right fit fast.",
    icon: Search,
    backgroundColor: "bg-brand-green"
  },
  {
    id: 2,
    title: "Review details",
    description: "Read clear job descriptions, requirements, and company info before applying.",
    icon: NotepadText,
    backgroundColor: "bg-brand-orange"
  },
  {
    id: 3,
    title: "Apply in minutes",
    description: "Submit your application with a short form and get a confirmation right away.",
    icon: Send,
    backgroundColor: "bg-brand-lilac"
  }
];

export const countries: SelectProps[] = [
  { label: "Country", value: "" },
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "France", value: "fr" },
];

export const employmentTypes: SelectProps[] = [
  { label: "Employement type", value: "" },
  { label: "Full time", value: "FULLTIME" },
  { label: "Contractor", value: "CONTRACTOR" },
  { label: "Part time", value: "PARTTIME" },
  { label: "Intern", value: "INTERN" },
];

export const natureOfJob: SelectProps[] = [
  { label: "Job nature", value: "" },
  { label: "Remote", value: "true" },
  { label: "On-site", value: "false" },
];

export const requirements: SelectProps[] = [
  { label: "Experience", value: "" },
  { label: "Under 3 years", value: "under_3_years_experience" },
  { label: "Over 3 years", value: "more_than_3_years_experience" },
  { label: "None", value: "no_experience" }
];