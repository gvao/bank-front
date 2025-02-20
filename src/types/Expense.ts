export type Expense = {
    title: string
    mount: number
    type: 'fixed' | 'variable',
    date: Date
    credit: boolean
}