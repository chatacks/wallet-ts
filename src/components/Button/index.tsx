import { ButtonProps } from '../../types';

function Button(
  { label,
    onClick = () => {},
    type = 'button',
    disabled = false,
  }: ButtonProps,
) {
  return (
    <div>
      <button
        type={ type }
        onClick={ onClick }
        disabled={ disabled }
      >
        { label }
      </button>
    </div>
  );
}

export default Button;
