export interface ITransaction {
  id?: string;
  desc: string;
  amount: string | number;
  isExpense: boolean;
}
