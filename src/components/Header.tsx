import { useSelector } from 'react-redux';
import { ReduxState } from '../types';

function Header() {
  const userEmail = useSelector((state: ReduxState) => state.user.email);
  const { expenses } = useSelector((state: ReduxState) => state.wallet);

  const conversionExpense = expenses.map((expense) => (Number(expense.value)
  * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2));

  const totalExpense = (conversionExpense
    .reduce((prevExpense, currentExpense) => prevExpense
    + Number(currentExpense), 0)).toFixed(2);

  return (
    <div>
      <p data-testid="email-field">{userEmail}</p>
      <p data-testid="total-field">{totalExpense}</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
