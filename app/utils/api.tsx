export const fetchJobs = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? ""
    }
  })
  if (!response.ok) {
    throw new Error('Request could not be processed.')
  }
  const result = await response.json()
  const data = result.data.jobs
  console.log(data)
  return data
};