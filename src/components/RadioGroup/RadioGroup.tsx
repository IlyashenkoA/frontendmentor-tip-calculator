import { ChangeEvent, useEffect, useRef, useState } from "react";
import { InputProps } from "../Input/Input";
import { RadioButton } from "../RadioButton/RadioButton";
import styles from './RadioGroup.module.css';

const tips = [
  {
    id: 1,
    value: '5'
  },
  {
    id: 2,
    value: '10'
  },
  {
    id: 3,
    value: '15'
  },
  {
    id: 4,
    value: '25'
  },
  {
    id: 5,
    value: '50'
  },
];

interface IRadioGroupProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  render: ({ id, placeholder, inputRef, value, onFocus, onBlur, onChange }: InputProps) => React.ReactNode;
}

export const RadioGroup = ({ value, onChange, render }: IRadioGroupProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const radioButtons = document.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
    if (focused) {
      radioButtons.forEach(radioButton => {
        radioButton.checked = false;
      });
    }

    if (value === '') {
      setInputValue('');
      radioButtons.forEach(radioButton => {
        radioButton.checked = false;
      });
    }
  }, [focused, value]);

  return (
    <div className={styles.input__group}>
      <label className={styles.input__label}>Select Tip %</label>
      <div className={styles.input__fields}>
        {tips.map((tip) => {
          return (
            <RadioButton
              key={tip.id}
              value={tip.value}
              group='tips'
              onChange={(e) => {
                onChange(e);
                setInputValue('');
              }}
            />
          );
        })}
        {render({
          id: 'tips',
          placeholder: 'Custom',
          inputRef,
          value: inputValue,
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          onChange: (e) => { onChange(e); setInputValue(e.target.value); }
        })}
      </div>
    </div>
  );
};