import React, { useEffect } from "react";
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
  // Listen for the reset event
  useEffect(() => {
    const handleResetFilter = () => {
      const event = new CustomEvent("format-filter-change", {
        detail: { format: "" },
      });
      document.dispatchEvent(event);
    };

    document.addEventListener("reset-format-filter", handleResetFilter);
    return () => {
      document.removeEventListener("reset-format-filter", handleResetFilter);
    };
  }, []);

  const handleValueChange = (value: string) => {
    // Convert "all" to empty string for filter logic
    const formatValue = value === "all" ? "" : value;

    // Dispatch custom event with the selected format
    const event = new CustomEvent("format-filter-change", {
      detail: { format: formatValue },
    });
    document.dispatchEvent(event);
  };

  return (
    <div id="format-filter-container">
      <Select onValueChange={handleValueChange} defaultValue="all">
        <SelectTrigger className="w-[140px]" data-testid="format-filter">
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
