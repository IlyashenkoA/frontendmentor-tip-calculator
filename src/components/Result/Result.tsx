import styles from './Result.module.css';

export const Result: React.FC<{ title: string; amount: number; }> = ({ title, amount }) => {
  return (
    <div className={styles.result__item}>
      <div className={styles.result__title}>
        <h2>{title}</h2>
        <p>/ person</p>
      </div>
      <div className={styles.result__money}>${amount.toFixed(2)}</div>
    </div>
  );
};