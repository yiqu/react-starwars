import { SortActionButton } from "./quotes.model";

export interface SortActionProp {
  actions: SortActionButton[];
  onSortChange: (btn: SortActionButton) => void;
  sortDir: SortActionButton;
}