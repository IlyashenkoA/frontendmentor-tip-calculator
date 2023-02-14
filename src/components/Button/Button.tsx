import styles from './Button.module.css';

interface IButtonProps {
  disabled: boolean;
  onClick: () => void;
}

export const Button = ({ disabled, onClick }: IButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>RESET</button>
  );
};