// Define custom events for the project
interface FilterState {
  search: string;
  format: string;
  sort: string;
}

interface FormatFilterChange {
  format: string;
}

interface SortOptionChange {
  sort: string;
}

declare global {
  interface DocumentEventMap {
    filterchange: CustomEvent<FilterState>;
    "reset-format-filter": CustomEvent<void>;
    "format-filter-change": CustomEvent<FormatFilterChange>;
    "sort-option-change": CustomEvent<SortOptionChange>;
  }
}

export {};
