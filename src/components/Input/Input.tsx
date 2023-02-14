import { ChangeEvent, FormEventHandler, RefObject } from 'react';
import './Input.css';

export interface InputProps {
  placeholder: string,
  icon?: 'dollar' | 'avatar',
  id: string;
  inputRef?: RefObject<HTMLInputElement>;
  value: string;
  pattern?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onInputChange?: FormEventHandler<HTMLInputElement>;
  onFocus?: FormEventHandler<HTMLInputElement>;
  onBlur?: FormEventHandler<HTMLInputElement>;
}

export const Input = ({
  placeholder,
  icon,
  id,
  inputRef,
  value,
  pattern = '^([0-9]*[.]+[0-9])?([1-9]+[0-9])?[1-9]*',
  onChange,
  onInputChange,
  onFocus,
  onBlur,
}: InputProps) => {
  return (
    <div className='input__control'>
      {icon && <i className={`input__icon input__icon-${icon}`}></i>}
      <input
        className='input__field'
        id={id}
        ref={inputRef}
        type='text'
        placeholder={placeholder}
        value={value}
        inputMode='numeric'
        pattern={pattern}
        onChange={onChange}
        onInput={onInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};;