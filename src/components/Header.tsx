import { useSelector } from 'react-redux';
import { UserEmailType } from '../types';

function Header() {
  const userEmail = useSelector((state: UserEmailType) => state.user.email);

  return (
    <div>
      <p data-testid="email-field">{userEmail}</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
