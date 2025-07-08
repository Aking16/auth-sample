import LoginForm from '@/components/forms/login-form';
import Image from 'next/image';
import styles from "./page.module.scss";

export default function Page() {
  return (
    <main>
      <div className={styles.page}>
        <div className={styles.formContainer}>
          <h1>ورود</h1>
          <LoginForm />
        </div>
        <Image src="/images/login.svg" alt="Login picture" width={500} height={500} />
      </div>
    </main>
  );
}
