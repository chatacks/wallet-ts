# Wallet

Este projeto é uma aplicação de carteira digital que permite controlar seus gastos e visualizar o total em diferentes moedas. A aplicação permite adicionar, remover e editar gastos, além de exibir uma tabela detalhada dos gastos e convertê-los para a moeda de sua escolha.

## Funcionalidades

- **Adicionar Gasto**: Adicione novos gastos à sua carteira, especificando o valor, a descrição, a categoria e a moeda.
- **Remover Gasto**: Remova gastos indesejados ou que não sejam mais relevantes.
- **Editar Gasto**: Edite os detalhes de gastos existentes, incluindo a moeda.
- **Visualizar Tabela de Gastos**: Veja todos os seus gastos em uma tabela organizada, com todos os detalhes incluídos.
- **Conversão de Moeda**: Converta o total de seus gastos para a moeda de sua escolha, utilizando a API de conversão de moedas.

## Tecnologias Utilizadas

- **Linguagem**: Typescript
- **Framework**: React
- **Gerenciamento de Estado**: Redux com Redux Thunk
- **Roteamento**: React Router DOM
- **Ícones**: React Icons
- **Teste**: Testing Library com Jest
- **Ferramentas de Desenvolvimento**: Redux DevTools Extension

## API Utilizada

A aplicação utiliza a API [AwesomeAPI - Conversor de Moedas](https://economia.awesomeapi.com.br/json/all) para obter as taxas de câmbio em tempo real e converter os gastos para a moeda escolhida.

## Como Executar o Projeto

1. **Clone este repositório**:

   ```bash
   git clone git@github.com:chatacks/wallet-ts.git
   cd wallet-ts
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie a aplicação**:

   ```bash
   npm run dev || npm start
   ```

4. **Acesse a aplicação**:

   Abra o navegador e vá para `http://localhost:3000` para acessar a interface da carteira.

## Estrutura do Projeto

- **src/**: Contém todo o código fonte da aplicação.
  - **components/**: Componentes reutilizáveis da aplicação.
  - **pages/**: Páginas principais, como a tela de carteira e tela de conversão.
  - **redux/**: Configuração e implementação do Redux, incluindo actions, reducers e store.
  - **services/**: Lógica de integração com a API de conversão de moedas.
  - **tests/**: Testes unitários e de integração usando Testing Library e Jest.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para relatar bugs ou sugerir novas funcionalidades. Pull requests também são apreciados.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Referências

- [Documentação do React](https://reactjs.org/)
- [Documentação do Redux](https://redux.js.org/)
- [Documentação do React Router](https://reactrouter.com/)
- [Documentação do AwesomeAPI - Conversor de Moedas](https://docs.awesomeapi.com.br/api-de-moedas)
