import { ExpensesFormType } from '../../types';

export const GET_ID_TO_EDIT = 'GET_ID_TO_EDIT';
export const TO_EDIT = 'TO_EDIT';

export const actionGetIdToEdit = (id: number) => ({
  type: GET_ID_TO_EDIT,
  payload: {
    editor: true,
    idToEdit: id,
  },
});

export const actionToEdit = (id: number, data: ExpensesFormType) => ({
  type: TO_EDIT,
  payload: {
    editor: false,
    idToEdit: id,
    editExpense: data,
  },
});
