export interface SelectContainerProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: string[];
  value?: string;
  initialOption?: string;
}
