import { ButtonProps } from '../../types';

function Button(
  { label,
    onClick,
    type = 'button',
    disabled = false,
    testId,
  }: ButtonProps,
) {
  return (
    <div>
      <button
        type={ type }
        onClick={ onClick }
        disabled={ disabled }
        data-testid={ `${testId}-btn` }
      >
        { label }
      </button>
    </div>
  );
}

export default Button;
