import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TNavLink = {
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & { muiName: string; };
  to: string;
  title: string;
}