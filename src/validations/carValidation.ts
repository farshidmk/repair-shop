import { Car } from "@prisma/client";
import { z } from "zod";
import * as Yup from "yup";

export const carYupValidation = Yup.object().shape({
  brand: Yup.string().required("برند خودرو را وارد کنید"),
  color: Yup.string().required("رنگ خودرو را وارد کنید"),
  model: Yup.string().required("مدل خودرو را وارد کنید"),
  number: Yup.string().required("پلاک خودرو را وارد کنید"),
  owner: Yup.string().required("صاحب خودرو را وارد کنید"),
  // product_year: Yup.string().length(4, "سال تولید را به درستی وارد کنید"),
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
  owner: z.string({
    message: "صاحب خودرو را به درستی وارد کنید",
    required_error: "صاحب خودرو الزامی است",
  }),
  productYear: z
    .string()
    .datetime({
      message: "سال تولید خودرو را به درستی وارد کنید",
    })
    .optional(),
});
