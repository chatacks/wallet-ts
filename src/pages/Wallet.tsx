import { useSelector } from 'react-redux';
import { ReduxState } from '../types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

function Wallet() {
  const { expenses } = useSelector((state: ReduxState) => state.wallet);

  const conversionExpense = expenses.map((expense) => (Number(expense.value)
  * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2));

  const totalExpense = (conversionExpense
    .reduce((prevExpense, currentExpense) => prevExpense
    + Number(currentExpense), 0)).toFixed(2);

  return (
    <>
      <Header totalExpense={ totalExpense } />
      <WalletForm />
    </>
  );
}

export default Wallet;
