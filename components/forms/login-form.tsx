"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, loginFormSchemaType } from "@/schema/loginFormSchema";
import { useForm } from "react-hook-form";
import ErrorMessage from "../messages/error-message";
import styles from "./login-form.module.scss";
import Input from "../ui/input";
import Label from "../ui/label";
import { Button } from "../ui/button";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: loginFormSchemaType) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputContainer}>
        <Label aria-invalid={errors.username ? "true" : "false"}>نام کاربری</Label>
        <Input
          type="text"
          aria-invalid={errors.username ? "true" : "false"}
          {...register("username")}
        />
        {errors.username && <ErrorMessage message={errors.username.message} />}
      </div>

      <div className={styles.inputContainer}>
        <Label aria-invalid={errors.phoneNumber ? "true" : "false"}>شماره تلفن</Label>
        <Input
          type="text"
          aria-invalid={errors.phoneNumber ? "true" : "false"}
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && <ErrorMessage message={errors.phoneNumber.message} />}
      </div>

      <div className={styles.inputContainer}>
        <Label aria-invalid={errors.password ? "true" : "false"}>رمز عبور</Label>
        <Input
          type="password"
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password")}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
      </div>

      <div className={styles.inputContainer}>
        <Label aria-invalid={errors.confPassword ? "true" : "false"}>تایید رمز عبور</Label>
        <Input
          type="password"
          aria-invalid={errors.confPassword ? "true" : "false"}
          {...register("confPassword")}
        />
        {errors.confPassword && <ErrorMessage message={errors.confPassword.message} />}
      </div>

      <p>ورود و عضویت شما به منزله پذیرفتن قوانین و مقررات می باشد.</p>
      <Button type="submit" className={styles.button}>ورود</Button>
    </form>
  );
}
