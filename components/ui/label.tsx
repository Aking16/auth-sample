import { FC, LabelHTMLAttributes } from 'react';
import styles from './label.module.scss';

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = (props) => {
  return (
    <label
      {...props}
      className={styles.label}>
      {props.children}
    </label>
  );
};

export default Label;