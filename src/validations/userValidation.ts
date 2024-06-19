import { z } from "zod";
import * as Yup from "yup";

export const userYupValidation = Yup.object().shape({
  firstName: Yup.string().required("نام را وارد کنید"),
  lastName: Yup.string().required("نام خانوادگی را وارد کنید"),
  phoneNumber: Yup.string().required("تلفن کاربر را وارد کنید"),
  username: Yup.string().required("نام کاربری را وارد کنید"),
  password: Yup.string().required("رمز عبور را وارد کنید"),
  // product_year: Yup.string().length(4, "سال تولید را به درستی وارد کنید"),
});

export const userZodValidation = z.object({
  firstName: z.string({
    message: "نام را وارد کنید",
  }),
  lastName: z.string({
    message: "نام خانوادگی را وارد کنید",
  }),
  phoneNumber: z.string({
    message: "تلفن کاربر را وارد کنید",
  }),
  username: z
    .string({
      message: "نام کاربری را وارد کنید",
    })
    .optional(),
  password: z
    .string({
      message: "رمز عبور را وارد کنید",
    })
    .optional(),
});
