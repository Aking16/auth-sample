"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, loginFormSchemaType } from "@/schema/loginFormSchema";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../messages/error-message";
import styles from "./login-form.module.scss";
import Input from "../../ui/input";
import Label from "../../ui/label";
import { Button } from "../../ui/button";
import axios from "axios";
import { RandomUserResponse } from "@/types";
import { useRouter } from "nextjs-toploader/app";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: loginFormSchemaType) => {
    console.log("Form Data:", data);

    try {
      const res: RandomUserResponse = (await axios.get("https://randomuser.me/api/?results=1&nat=us?")).data;

      localStorage.setItem("user", JSON.stringify(res.results[0]));
      document.cookie = `user-token=${JSON.stringify(res.results[0].id.value)}; path=/; max-age=3600`;
      router.push("/dashboard");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputContainer}>
        <Label
          htmlFor="username"
          aria-invalid={errors.username ? "true" : "false"}>
          نام کاربری
        </Label>
        <Input
          id="username"
          type="text"
          aria-invalid={errors.username ? "true" : "false"}
          {...register("username")}
        />
        {errors.username && <ErrorMessage message={errors.username.message} />}
      </div>

      <div className={styles.inputContainer}>
        <Label
          htmlFor="phoneNumber"
          aria-invalid={errors.phoneNumber ? "true" : "false"}>
          شماره تلفن
        </Label>
        <Input
          id="phoneNumber"
          type="text"
          aria-invalid={errors.phoneNumber ? "true" : "false"}
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && <ErrorMessage message={errors.phoneNumber.message} />}
      </div>

      <div className={styles.inputContainer}>
        <Label
          htmlFor="password"
          aria-invalid={errors.password ? "true" : "false"}>
          رمز عبور
        </Label>
        <Input
          id="password"
          type="password"
          aria-invalid={errors.password ? "true" : "false"}
          autoComplete="off"
          {...register("password")}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
      </div>

      <div className={styles.inputContainer}>
        <Label
          htmlFor="confPassword"
          aria-invalid={errors.confPassword ? "true" : "false"}>
          تایید رمز عبور
        </Label>
        <Input
          id="confPassword"
          type="password"
          aria-invalid={errors.confPassword ? "true" : "false"}
          autoComplete="off"
          {...register("confPassword")}
        />
        {errors.confPassword && <ErrorMessage message={errors.confPassword.message} />}
      </div>

      <p>ورود و عضویت شما به منزله پذیرفتن قوانین و مقررات می باشد.</p>
      <Button type="submit" className={styles.button}>ورود</Button>
    </form>
  );
}
