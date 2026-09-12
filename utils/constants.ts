import { NotepadText, Search, Send, type LucideIcon } from "lucide-react";

type HowCardContent = {
  id: number,
  title: string,
  description: string,
  icon: LucideIcon,
  backgroundColor: string
};

export const howCardContent: HowCardContent[] = [
  {
    id: 1,
    title: "Search smart",
    description: "Filter by role, location, job type, and date posted to find the right fit fast.",
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