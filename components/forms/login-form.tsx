"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema, loginFormSchemaType } from '@/schema/loginFormSchema';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../messages/error-message';
import styles from './login-form.module.scss';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: loginFormSchemaType) => {
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputContainer}>
        <label>نام کاربری</label>
        <input type="text" {...register('username')} className="input" />
        {errors.username && <ErrorMessage message={errors.username.message} />}
      </div>

      <div className={styles.inputContainer}>
        <label>شماره تلفن</label>
        <input type="text" {...register('phoneNumber')} className="input" />
        {errors.phoneNumber && <ErrorMessage message={errors.phoneNumber.message} />}
      </div>

      <div className={styles.inputContainer}>
        <label>رمز عبور</label>
        <input type="password" {...register('password')} className="input" />
        {errors.password && <ErrorMessage message={errors.password.message} />}
      </div>

      <div className={styles.inputContainer}>
        <label>تایید رمز عبور</label>
        <input type="password" {...register('confPassword')} className="input" />
        {errors.confPassword && <ErrorMessage message={errors.confPassword.message} />}
      </div>

      <p>ورود و عضویت شما به منزله پذیرفتن قوانین و مقررات می باشد.</p>
      <button type="submit" className="btn-primary">ورود</button>
    </form>
  );
}
