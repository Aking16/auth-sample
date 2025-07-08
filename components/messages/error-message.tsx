import styles from './error-message.module.scss';

interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <p className={styles.error}>{message}</p>
  );
};

export default ErrorMessage;