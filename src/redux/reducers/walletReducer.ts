import { AnyAction } from 'redux';
import { REQUEST_SUCCESSFUL } from '../actions/actionThunk';
import { WALLET_FORM } from '../actions/actionWallet';
import { REMOVE_EXPENSE } from '../actions/actionRemove';

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

    default:
      return state;
  }
};

export default wallet;
