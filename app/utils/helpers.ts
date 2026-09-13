export const companyInitials = (company: string) => {
  const wordsArray = company.split(" ")
  const firstLetter = wordsArray[0].charAt(0)
  return `${firstLetter}` 
};