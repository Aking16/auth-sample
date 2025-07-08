import LoginForm from '@/components/forms/login-form';
import Image from 'next/image';
import styles from "./page.module.scss";
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Page() {
  return (
    <main className={styles.page}>
      <ThemeToggle />
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.header}>ورود</h1>
          <LoginForm />
        </div>
        <Image src="/images/login.svg" alt="Login picture" width={500} height={500} />
      </div>
    </main>
  );
}
