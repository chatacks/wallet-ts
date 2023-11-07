export const initialExpensesValue = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {
    USD: {
      code: '',
      codein: '',
      name: '',
      ask: '',
    },
  },
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
