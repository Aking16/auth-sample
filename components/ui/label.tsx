import { FC, InputHTMLAttributes } from 'react';
import styles from './label.module.scss';

const Label: FC<InputHTMLAttributes<HTMLLabelElement>> = (props) => {
  return (
    <label
      {...props}
      className={styles.label}>
      {props.children}
    </label>
  );
};

export default Label;