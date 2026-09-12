import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
// import type { UrlParams } from "@/utils/api";

export type UrlParams = {
  query: string, 
  country: string, 
  employmentType: string,
  setQuery: Dispatch<SetStateAction<string>>,
  setCountry: Dispatch<SetStateAction<string>>,
  setEmploymentType: Dispatch<SetStateAction<string>>
}

export const paramsContext = createContext<UrlParams | null>(null)

function ParamsProvider ({ children }: { children: React.ReactNode }) {
  const [ query, setQuery ] = useState("")
  const [ country, setCountry ] = useState("")
  const [ employmentType, setEmploymentType ] = useState("")

  const paramsValues = {
    query,
    country,
    employmentType,
    setQuery,
    setCountry,
    setEmploymentType
  }

  return <paramsContext.Provider value={paramsValues}>
    {children}
  </paramsContext.Provider>
}

export default ParamsProvider