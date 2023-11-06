import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import Button from '../components/Button';
import Input from '../components/Input';
import { FormLoginType } from '../types';
import { userEmail } from '../redux/actions/actionUser';

const initialFormValue = {
  email: '',
  password: '',
};

function Login() {
  const [formData, setFormData] = useState<FormLoginType>(initialFormValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData(((prevData) => ({
      ...prevData,
      [name]: value,
    })));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(userEmail(formData.email));
    navigate('/carteira');
  };

  const regexPassword = /^(.{6,})$/;
  const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  const isValid = regexPassword.test(formData.password)
    && regexEmail.test(formData.email);

  return (
    <form
      onSubmit={ handleFormSubmit }
    >
      <Input
        testId="email"
        label="Email: "
        type="email"
        name="email"
        id="email"
        value={ formData.email }
        onChange={ handleFormChange }
        placeholder="Email"
        required
      />

      <Input
        testId="password"
        label="Senha: "
        type="password"
        name="password"
        id="password"
        value={ formData.password }
        onChange={ handleFormChange }
        placeholder="Senha"
        required
      />

      <button
        disabled={ !isValid }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
