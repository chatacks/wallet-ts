import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../types';
import { actionRemoveExpense } from '../redux/actions/actionRemove';
import Button from './Button';
import { actionGetIdToEdit } from '../redux/actions/actionEdit';

function Table() {
  const expenses = useSelector((state: ReduxState) => state.wallet.expenses);
  const dispatch = useDispatch();

  const removeExpense = (expenseId: number) => {
    const removedsExpenses = expenses.filter((expense) => expense.id !== expenseId);
    dispatch(actionRemoveExpense(removedsExpenses));
  };

  const editExpense = (expenseId: number) => {
    const editedsExpenses = expenses.find((expense) => expense.id === expenseId);
    console.log(editedsExpenses);

    if (editedsExpenses) {
      dispatch(actionGetIdToEdit(editedsExpenses.id));
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{(Number(expense.value)).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>{(Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)}</td>
              <td>
                {(Number(expense.value)
              * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <Button
                  label="Editar"
                  testId="edit"
                  type="button"
                  onClick={ () => editExpense(expense.id) }
                />
                <Button
                  label="Excluir"
                  testId="delete"
                  type="button"
                  onClick={ () => removeExpense(expense.id) }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
