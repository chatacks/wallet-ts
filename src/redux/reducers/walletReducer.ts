import { AnyAction } from 'redux';
import { REQUEST_SUCCESSFUL } from '../actions/actionThunk';
import { WALLET_FORM } from '../actions/actionWallet';
import { REMOVE_EXPENSE } from '../actions/actionRemove';
import { GET_ID_TO_EDIT, TO_EDIT } from '../actions/actionEdit';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        currencies: action.payload.currencies,
      };

    case WALLET_FORM:
      return {
        ...state,
        expenses: [...state.expenses, action.payload.form],
      };

    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: action.payload.expenseId,
      };

    case GET_ID_TO_EDIT:
      return {
        ...state,
        editor: action.payload.editor,
        idToEdit: action.payload.idToEdit,
      };

    case TO_EDIT:
      return {
        ...state,
        editor: action.payload.editor,
        expenses: state.expenses
          .map((expense) => (
            expense.id
            === action.payload.idToEdit
              ? action.payload.editExpense : expense)),
        idToEdit: action.payload.idToEdit,
      };
    default:
      return state;
  }
};

export default wallet;
