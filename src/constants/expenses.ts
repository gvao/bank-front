import { Expense } from "../components/ExpenseItem";

export const expenses: Expense[] = [
    { title: 'Aluguel', mount: 1000, type: 'fixed', date: new Date(), credit: false },
    { title: 'Luz', mount: 100, type: 'fixed', date: new Date(), credit: false },
    { title: 'Água', mount: 50, type: 'fixed', date: new Date(), credit: false },
    { title: 'Internet', mount: 100, type: 'fixed', date: new Date(), credit: false },
    { title: 'Mercado', mount: 500, type: 'variable', date: new Date(), credit: false },
    { title: 'salario', mount: 2000, type: 'fixed', date: new Date(), credit: true },
]
