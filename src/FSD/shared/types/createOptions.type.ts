import { TSelectOption } from "./selectOption.type";

export type TCreateOptonsUtil<T extends string | number, P> = (data: P) => TSelectOption<T>[];
