import { InputProps } from '../../types';

function Input({
  label,
  type,
  name,
  value,
  onChange,
  id,
  placeholder,
  required,
  testId }: InputProps) {
  return (
    <div>
      <label htmlFor={ id }>
        { label }
      </label>
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        id={ id }
        placeholder={ placeholder }
        required={ required }
        data-testid={ `${testId}-input` }
      />
    </div>

  );
}

export default Input;
