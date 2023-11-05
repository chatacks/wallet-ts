export type InputProps = {
  type: string;
  label: string;
  value: string;
  name: string;
  id: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  testId: string
};

export type ButtonProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'button' | 'submit';
  disabled?: boolean;
};

export type FormLoginType = {
  email: string;
  password: string;
};

export type UserEmailType = {
  user: {
    email: string;
  }
};
