import clsx from "clsx";
import classes from "./Skeleton.module.css";
import { IWithClassName } from "../../types/IWithInterfaces";

const Skeleton = ({ className }: IWithClassName) => (
  <div className={clsx(classes.baseSkeleton, className)} />
);

export { Skeleton };