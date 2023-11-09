import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockData from './helpers/mockData';

const initialState = {
  user: {
    email: 'test@test.com',
    senha: 'senha123@',
  },
};

const endpoint = 'https://economia.awesomeapi.com.br/json/all';
describe('<App />', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Verifica se a página Login renderiza o formulário de usuário corretamente e se comporta como o esperado', async () => {
    renderWithRouterAndRedux(<App />);
    const user = userEvent.setup();

    const emailType = 'test@test.com';
    const passwordType = 'senha123@';

    const email = screen.getByLabelText(/email:/i);
    expect(email).toBeInTheDocument();

    const password = screen.getByLabelText(/senha:/i);
    expect(password).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();

    await user.type(email, emailType);
    await user.type(password, passwordType);

    expect(button).toBeEnabled();

    await user.click(button);
    screen.debug();
  });

  it('Verifica se ao estar na página carteira renderiza os elementos corretamente', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], initialState });

    const email = screen.getByTestId('email-field');
    expect(email).toBeInTheDocument();

    const total = screen.getByTestId('total-field');
    expect(total).toBeInTheDocument();

    const currency = screen.getByTestId('total-field');
    expect(currency).toBeInTheDocument();

    const value = screen.getByRole('spinbutton', { name: /valor:/i });
    expect(value).toBeInTheDocument();

    const combobox = screen.getAllByRole('combobox');
    expect(combobox).toHaveLength(3);

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(8);

    const descriptionInput = screen.getByRole('textbox', { name: /descrição:/i });
    expect(descriptionInput).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(button).toBeInTheDocument();
  });

  it('Verifica se os inputs funcionam corretamente', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const user = userEvent.setup();
    // const fetch = vi.spyOn(global, 'fetch').mockResolvedValue({
    //   json: async () => (mockData),
    // } as Response);

    vi.spyOn(global, 'fetch');

    const value = screen.getByRole('spinbutton', { name: /valor:/i });
    await user.type(value, '120');

    expect(value).toHaveValue(120);

    const method = screen.getByRole('combobox', { name: /método de pagamento:/i });
    const creditCard = screen.getByRole('option', { name: /cartão de crédito/i });
    await user.selectOptions(method, creditCard);

    expect(method).toHaveValue('Cartão de crédito');

    const button = screen.getByRole('button', { name: /adicionar despesa/i });
    await user.click(button);

    expect(fetch).toHaveBeenCalled();
  });
});
