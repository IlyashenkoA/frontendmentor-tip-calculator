import { ChangeEvent } from 'react';
import styles from './RadioButton.module.css';

interface IRadioButtonProps {
  value: string;
  group: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = ({ value, group, onChange }: IRadioButtonProps) => {
  return (
    <div className={styles.input__radio}>
      <label className={styles.input__label}>{`${value}%`}</label>
      <input
        className={styles.input__field}
        type='radio'
        name={group}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};;