import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type InputProps = {
  label: string;
  type: string;
  value: string;
  name: string;
  id: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  testId?: string
};

export type ButtonProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'button' | 'submit';
  disabled?: boolean;
  testId?: string;
};

export type FormLoginType = {
  email: string;
  password: string;
};

export type UserEmailType = {
  email: string;
};

export type WalletType = {
  currencies: string[];
  expenses: ExpensesFormType[];
  editor: boolean;
  idToEdit: number;
};

export type Currencies = {
  [key: string]: {
    name: string
    code: string
    ask: string
  },
};

export type ExpensesFormType = {
  id: number;
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates: Currencies;
};

export type ReduxState = {
  user: UserEmailType;
  wallet: WalletType;
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
