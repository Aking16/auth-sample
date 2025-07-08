import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.string({
    required_error: "نام کاربری را وارد کنید",
  }).nonempty({
    message: "نام کاربری را وارد کنید"
  }).min(2, {
    message: 'نام کاربری باید حداقل 2 کاراکتر باشد'
  }),
  phoneNumber: z.string({
    required_error: "شماره تلفن را وارد کنید",
  }).nonempty({
    message: "شماره تلفن را وارد کنید"
  }).regex(/^(\+98|0)?9\d{9}$/, {
    message: 'شماره تلفن باید یک شماره معتبر ایران باشد'
  }),
  password: z.string({
    required_error: "رمز عبور را وارد کنید",
  }).nonempty({
    message: "رمز عبور را وارد کنید"
  }).min(6, {
    message: 'رمز عبور باید حداقل 6 کاراکتر باشد'
  }),
  confPassword: z.string({
    required_error: "تایید رمز عبور را وارد کنید",
  }).nonempty({
    message: "تایید رمز عبور را وارد کنید"
  }).min(6, {
    message: "تایید رمز عبور باید حداقل 6 کاراکتر باشد."
  })
}).refine((data) => data.password === data.confPassword, {
  message: "رمز عبور و تایید آن مطابقت ندارند!",
  path: ["confPassword"],
});

export type loginFormSchemaType = z.infer<typeof loginFormSchema>;
