import { Dispatch } from 'redux';

import getCurrencies from '../../utils/getCurrencies';

export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';

const requestSuccessful = (currencies: string[]) => ({
  type: REQUEST_SUCCESSFUL,
  payload: {
    currencies,
  },
});

const currenciesThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      const currencies = await getCurrencies();
      const currenciesKeys = Object.keys(currencies);
      const currenciesData = currenciesKeys.filter((currencie) => (currencie !== 'USDT'));
      dispatch(requestSuccessful(currenciesData));
    } catch (error: any) {
      return error;
    }
  };
};

export default currenciesThunk;
