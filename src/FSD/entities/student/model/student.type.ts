export type TStudent = {
  _id: string;
  id: number;
  name: string;
  gender: 'male' | 'female';
  price: number;
  form: number;
  ownMobilePhone?: string;
  parentsMobilePhone: string;
  parentsName: string;
  activity: boolean;
};
