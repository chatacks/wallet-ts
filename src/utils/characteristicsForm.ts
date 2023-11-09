import { ExpensesFormType } from '../types';

export const initialExpensesValue: ExpensesFormType = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {
    USD: {
      code: '',
      name: '',
      ask: '',
    },
  },
};

export const initialFormValue = {
  email: '',
  password: '',
};

export const arrayMethods: string[] = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];

export const arrayTags: string[] = [
  'Alimentação',
  'Lazer',
  'Trabalho',
  'Transporte',
  'Saúde',
];
