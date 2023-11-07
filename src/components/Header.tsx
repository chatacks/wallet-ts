import { useSelector } from 'react-redux';
import { ReduxState } from '../types';

function Header({ totalExpense }: { totalExpense: string }) {
  const userEmail = useSelector((state: ReduxState) => state.user.email);

  return (
    <div>
      <p data-testid="email-field">{userEmail}</p>
      <p data-testid="total-field">{totalExpense}</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
