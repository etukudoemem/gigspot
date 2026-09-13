"use client"

import { fetchJobs } from "@/app/utils/api"
import { useQuery } from "@tanstack/react-query"

export const useFetchJobs = (url: string, query: string) => {
    return useQuery({
        queryKey: ["jobs", query],
        queryFn: () => fetchJobs(url),
        enabled: false
    })
}