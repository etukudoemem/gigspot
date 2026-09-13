import { Search } from "lucide-react";
import { SearchInputProps } from "../utils/types";

export const SearchInput = ({ query, setQuery, isFetching, refetch }: SearchInputProps) => {
  const isDisabled = query === "" ? true : false

  return(
    <div className="xl:w-1/2 flex gap-x-2 items-center pl-4 pr-3 py-2 border-1 border-gray-300 rounded-xl shadow-[0px_4px_45px_0px_#00000014]">
      <Search className="text-gray-400" size={18}/>
      <input 
        name="search"
        type="text"
        placeholder="job title, keywords or company name"
        className="w-full outline-none placeholder-gray-300"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button 
        onClick={() => refetch()}
        disabled={isDisabled ?? isFetching}
        className={`min-w-fit h-fit px-6 py-3 text-brand-offwhite rounded-md ${isDisabled ? "bg-gray-200" : "bg-brand-orange"} hover:scale-102 ease-in-out duration-200 cursor-pointer`}
      >
        {isFetching ? "Searching..." : "Search jobs"}
      </button>
    </div>
  )
};