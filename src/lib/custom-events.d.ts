// Define custom events for the project
interface FilterState {
  search: string;
  format: string;
  sort: string;
}

declare global {
  interface DocumentEventMap {
    filterchange: CustomEvent<FilterState>;
    "reset-format-filter": CustomEvent<void>;
  }
}

export {};
