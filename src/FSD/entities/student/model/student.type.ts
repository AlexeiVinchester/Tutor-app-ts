export type TStudent =  {
    _id?: string;
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
