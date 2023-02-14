import { ChangeEvent, useState } from "react";
import { InputProps } from "../Input/Input";
import './InputGroup.css';
interface InputGroupProps {
  label: string;
  placeholder: string;
  id: string;
  icon?: 'dollar' | 'avatar';
  value: string;
  pattern?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  render: ({ id, icon, placeholder, value, pattern, onChange, onInputChange }: InputProps) => React.ReactNode;
}

export const InputGroup = ({
  label,
  placeholder,
  id,
  icon,
  value,
  pattern,
  onChange,
  render
}: InputGroupProps) => {
  const [error, setError] = useState<boolean>(false);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value <= 0 || (e.target.value.split('')[0] === '0' && e.target.value.split('')[1] !== '.')) {
      setError(true);
    } else {
      setError(false);
    }

    if (e.target.value.length === 0) {
      setError(false);
    }
  };

  return (
    <div className="input__group">
      <div className="input__info">
        <label className="input__label" htmlFor={label}>{label}</label>
        {error && <p className='input__error-message'>Can't be zero</p>}
      </div>
      {render({
        id,
        icon,
        placeholder,
        value,
        pattern,
        onChange,
        onInputChange
      })}
    </div>
  );
};