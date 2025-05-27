import { ReactNode } from "react"

type TStudetnInfoSectionProps = {
  label: string;
  children: ReactNode;
};

export const StudentInfoSection = ({ children, label }: TStudetnInfoSectionProps) => {
  return (
    <div className="flex gap-1 items-center">
      <div className="">{children}</div>
      <label className="text-gray-500">{label}</label>
    </div>
  );
};