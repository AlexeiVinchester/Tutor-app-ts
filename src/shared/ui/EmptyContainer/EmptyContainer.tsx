import clsx from "clsx";
import classes from "./EmptyContainer.module.css";
import { IWithClassName } from "../../types/IWithInterfaces";
import { Logotype } from "../Logotype/Logotype";
import { ReactNode } from "react";

type TRenderProp<T> = () => T;

interface IEmptyContainer extends IWithClassName {
  renderEmptyContent: TRenderProp<ReactNode>;
};

const EmptyContainer = ({ className, renderEmptyContent }: IEmptyContainer) => (
  <div className={clsx(classes.emptyContainer, className)}>
    <Logotype />

    {renderEmptyContent()}
  </div>
);

export { EmptyContainer };