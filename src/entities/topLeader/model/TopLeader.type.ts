type TTopLeader = {
  id: string;
  name: string;
  surname: string;
  cryteriaValue: number;
};

type TTopLeaders = TTopLeader[];

interface IWithTopLeaders {
  topLeaders: TTopLeaders;
}

// Types for Top leaders amount (in select and dropdown)
const TOP_LEADERS_AMOUNT_VARIANTS = [3, 5, 10] as const;

type TTopLeadersAmount = typeof TOP_LEADERS_AMOUNT_VARIANTS[number];

interface IWithTopLeadersAmount {
  amount: TTopLeadersAmount
};

// Types for Top Leaders mode (in top leaders toggler)
const TOP_LEADERS_MODE_VARIANTS = ["amount", "income"] as const

type TTopLeadersMode = typeof TOP_LEADERS_MODE_VARIANTS[number];

interface IWithTopLeadersMode {
  mode: TTopLeadersMode;
}

export {
  TOP_LEADERS_AMOUNT_VARIANTS,
  TOP_LEADERS_MODE_VARIANTS,
};

export type {
  TTopLeader,
  TTopLeaders,
  IWithTopLeaders,
  TTopLeadersAmount,
  TTopLeadersMode,
  IWithTopLeadersAmount,
  IWithTopLeadersMode,
};