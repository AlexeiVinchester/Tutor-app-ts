export type TDebtor = {
  name: string;
  debt: number;
  amount: number;
};

export type TDebtorsInfo = {
  totalDebt: number;
  totalAmount: number;
  debtors: TDebtor[];
};