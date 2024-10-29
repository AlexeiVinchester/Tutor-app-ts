import { IChildren } from "../../../../../share/interfaces/children.interface";
import { TShowSnackBar } from "../../../../../share/interfaces/showSnackBar.type";

export interface IShowSnackBarProvider extends IChildren {
    showSnackBar: TShowSnackBar;
}