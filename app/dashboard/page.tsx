"use client";

import { RandomUser } from '@/types';
import { useEffect, useState } from 'react';
import styles from "./page.module.scss";
import { Button } from '@/components/ui/button';
import { useRouter } from 'nextjs-toploader/app';

export default function Page() {
  const [user, setUser] = useState<RandomUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storageUser = localStorage.getItem('user');
    if (storageUser) {
      const parsedUser = JSON.parse(storageUser) as RandomUser;
      setUser(parsedUser);
    } else {
      console.warn('No user found in localStorage');
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem('user');
    document.cookie = 'user-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setUser(null);
    router.push('/auth');
  }

  if (!user) return null;

  return (
    <div className={styles.page}>
      <div className={styles.center}>
        <h1>خوش آمدید, {user.name.first}!</h1>
        <p>ایمیل شما: {user.email}</p>
      </div>
      <Button className={styles.button} onClick={handleLogout}>
        خروج
      </Button>
    </div>
  );
}
