import { Dispatch } from 'redux';
import { ExpensesFormType } from '../../types';
import getCurrencies from '../../utils/getCurrencies';

export const WALLET_FORM = 'WALLET_FORM';

const onClickButton = (form: ExpensesFormType) => ({
  type: WALLET_FORM,
  payload: {
    form,
  },
});

const walletForm = (form: ExpensesFormType) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, value, description, currency, method, tag, exchangeRates } = form;
  return async (dispatch: Dispatch) => {
    try {
      const exchange = await getCurrencies();
      const expense = {
        id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates: exchange,
      };

      dispatch(onClickButton(expense));
    } catch (error: any) {
      return error;
    }
  };
};

export default walletForm;
