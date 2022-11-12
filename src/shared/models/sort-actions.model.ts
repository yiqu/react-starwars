import { SortActionButton } from "./core-props.model";

export interface SortActionProp {
  actions: SortActionButton[];
  onSortChange: (btn: SortActionButton) => void;
  sortDir: SortActionButton;
}