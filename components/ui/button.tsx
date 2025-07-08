import styles from './button.module.scss';
import clsx from 'clsx';

type Props = React.ComponentProps<'button'> & {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
};

export function Button({
  variant = 'default',
  size = 'default',
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        className
      )}
      {...props}
    />
  );
}
