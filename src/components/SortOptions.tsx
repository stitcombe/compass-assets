import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SortOptionsProps {
  assetType?: "logo" | "favicon" | "color" | "font";
}

export function SortOptions({ assetType }: SortOptionsProps) {
  return (
    <div id="sort-options-container">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Name (A-Z)" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name-asc">Name (A-Z)</SelectItem>
          <SelectItem value="name-desc">Name (Z-A)</SelectItem>
          {assetType !== "color" && (
            <>
              <SelectItem value="size-asc">Size (Small to Large)</SelectItem>
              <SelectItem value="size-desc">Size (Large to Small)</SelectItem>
            </>
          )}
        </SelectContent>
      </Select>
    </div>
  );
}
