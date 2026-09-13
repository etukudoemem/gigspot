"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"
import { SelectInputProps } from "../utils/types"

export const SelectInput = ({ items, filterType, setItem }: SelectInputProps) => {

  return(
    <Select 
      items={items} 
      value={filterType} 
      onValueChange={(value) => setItem(value!)}
    >
      <SelectTrigger className="w-full xl:w-1/2">
        <SelectValue placeholder={items[0].label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value} className="py-2 text-sm">
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
};