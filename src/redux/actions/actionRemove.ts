import { ExpensesFormType } from '../../types';

export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const actionRemoveExpense = (expenseId: ExpensesFormType[]) => ({
  type: REMOVE_EXPENSE,
  payload: {
    expenseId,
  },
});
