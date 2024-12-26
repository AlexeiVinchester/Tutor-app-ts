export interface Student {
  id: number;
  name: string;
  gender: 'male' | 'female';
  price: string;
  form: string;
  ownMobilePhone?: string;
  parentsMobilePhone: string;
  parentsName: string;
  status: 'active' | 'inactive';
}
