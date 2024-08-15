export interface Student {
    id: number,
    name: string,
    gender: 'male' | 'female',
    price: number,
    form: number,
    ownMobilePhone?: string,
    parentsMobilePhone: string,
    parentsName: string,
    status: 'active' | 'inactive'
}

