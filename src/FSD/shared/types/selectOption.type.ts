import { ReactNode } from "react";

export type TSelectOption<T extends string | number> = {
  label: ReactNode;
  value: T;
};
