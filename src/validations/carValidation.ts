import { Car } from "@prisma/client";
import { z } from "zod";
import * as Yup from "yup";

export const carYupValidation = Yup.object().shape({
  brand: Yup.string().required("برند خودرو را وارد کنید"),
  color: Yup.string().required("رنگ خودرو را وارد کنید"),
  model: Yup.string().required("مدل خودرو را وارد کنید"),
  number: Yup.string().required("پلاک خودرو را وارد کنید"),
  ownerId: Yup.string().required("صاحب خودرو را وارد کنید"),
  productYear: Yup.string()
    .matches(/^[0-9]+$/, "سال ساخت را به درستی وارد کنید")
    .min(4, "سال ساخت را به درستی وارد کنید")
    .max(4, "سال ساخت را به درستی وارد کنید"),
});
//<Omit<Car, "id">>

export const carZodValidation = z.object({
  brand: z
    .string({
      message: "برند خودرو را به درستی وارد کنید",
    })
    .optional(),
  color: z.string({ message: "رنگ باید رشته باشد" }).optional(),
  model: z.string({
    message: "مدل خودرو را به درستی وارد کنید",
    required_error: "مدل خودرو الزامی است",
  }),
  number: z.string({
    message: "پلاک خودرو را به درستی وارد کنید",
    required_error: "پلاک خودرو الزامی است",
  }),
  ownerId: z.string({
    message: "صاحب خودرو را به درستی وارد کنید",
    required_error: "صاحب خودرو الزامی است",
  }),
  productYear: z.string().optional(),
});
