import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface FormatFilterProps {
  formatOptions: string[];
}

export function FormatFilter({ formatOptions }: FormatFilterProps) {
  return (
    <div id="format-filter-container">
      <Select>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="All Formats" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Formats</SelectItem>
          {formatOptions.map((format) => (
            <SelectItem key={format} value={format}>
              {format}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
