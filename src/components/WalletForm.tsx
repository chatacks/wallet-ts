import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import { Dispatch, ExpensesFormType, ReduxState } from '../types';
import currenciesThunk from '../redux/actions/actionThunk';
import Button from './Button';
import walletForm from '../redux/actions/actionWallet';
import {
  arrayMethods,
  arrayTags,
  initialExpensesValue,
} from '../utils/characteristicsForm';
import { actionToEdit } from '../redux/actions/actionEdit';
import getCurrencies from '../utils/getCurrencies';

function WalletForm() {
  const [formData, setFormaData] = useState<ExpensesFormType>(initialExpensesValue);
  const dispatch: Dispatch = useDispatch();
  const currenciesArray = useSelector((state: ReduxState) => state.wallet.currencies);
  const expenseEditor = useSelector((state: ReduxState) => state.wallet.editor);
  const expenseIdToEdit = useSelector((state: ReduxState) => state.wallet.idToEdit);

  useEffect(() => {
    dispatch(currenciesThunk());
  }, []);

  const handleFormChange = (event:
  React.ChangeEvent<HTMLInputElement
  | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormaData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (expenseEditor) {
      const recoveryFetch = await getCurrencies();
      dispatch(actionToEdit(expenseIdToEdit, { ...formData,
        exchangeRates: recoveryFetch,
        id: expenseIdToEdit }));
      setFormaData({ ...initialExpensesValue, id: formData.id + 1 });
    } else {
      dispatch(walletForm(formData));
      setFormaData({ ...initialExpensesValue, id: formData.id + 1 });
    }
  };

  return (
    <form onSubmit={ handleFormSubmit }>
      <Input
        label="Valor: "
        type="number"
        name="value"
        id="value"
        testId="value"
        value={ formData.value }
        onChange={ handleFormChange }
      />

      <label htmlFor="currency">Moeda: </label>
      <select
        data-testid="currency-input"
        onChange={ handleFormChange }
        name="currency"
        id="currency"
      >
        {currenciesArray.map(((currencie) => (
          <option key={ currencie } value={ currencie }>{currencie}</option>
        )))}
      </select>

      <label htmlFor="method">Método de pagamento: </label>
      <select
        data-testid="method-input"
        onChange={ handleFormChange }
        name="method"
        id="method"
      >
        {arrayMethods.map((method) => (
          <option key={ method } value={ method }>{method}</option>
        ))}
      </select>

      <label htmlFor="tag">Categoria: </label>
      <select
        data-testid="tag-input"
        onChange={ handleFormChange }
        name="tag"
        id="tag"
      >
        {arrayTags.map((tag) => (
          <option key={ tag } value={ tag }>{tag}</option>
        ))}
      </select>

      <Input
        label="Descrição: "
        type="text"
        name="description"
        id="description"
        value={ formData.description }
        onChange={ handleFormChange }
        testId="description"
      />

      <Button
        label={ expenseEditor ? 'Editar despesa' : 'Adicionar despesa' }
        type="submit"
      />
    </form>
  );
}

export default WalletForm;
