"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Dispatch, SetStateAction } from "react";


export type SelectInputProps = {
  items: { 
    label: string; 
    value: string; 
  }[],
  filterType: string
  setItem: Dispatch<SetStateAction<string>>
}

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
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}