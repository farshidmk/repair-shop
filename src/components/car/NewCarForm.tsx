"use client";
import { serverCall } from "@/services/api";
import { ServerCallType } from "@/types/server";
import { Car } from "@prisma/client";
import { DefaultError, useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ShowErrors from "../showError/ShowErrors";
import { yupResolver } from "@hookform/resolvers/yup";
import { carYupValidation } from "@/validations/carValidation";
import { RenderFormItemType } from "@/types/render";
import RenderFormItem from "../render/RenderFormItem";

type Props = {};

type CarWithoutId = Omit<Car, "id">;

const NewCarForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CarWithoutId>({
    defaultValues: {
      brand: "",
      color: "",
      model: "",
      number: "",
    },
    resolver: yupResolver(carYupValidation),
  });

  const { mutate, isPending } = useMutation<Car, DefaultError, ServerCallType>({
    mutationFn: serverCall,
  });

  const onSubmit: SubmitHandler<CarWithoutId> = (data) => {
    serverCall({
      entity: "car",
      method: "post",
      data,
    });
  };

  console.log({ errors });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {NEW_CAR_ITEM.map((item) => (
        <RenderFormItem
          key={item.name}
          {...item}
          useFormRegisterReturn={{
            ...register(item.name as keyof CarWithoutId, {
              required: true,
            }),
          }}
        />
      ))}

      <ShowErrors
        errors={Object.values(errors)
          .filter((e) => e.message)
          .map((e) => e.message!)}
      />

      <button type="submit" className="btn btn-success btn-wide mt-3">
        ثبت
      </button>
    </form>
  );
};

export default NewCarForm;

const NEW_CAR_ITEM: RenderFormItemType[] = [
  {
    label: "مدل",
    name: "model",
    type: "text",
    placeholder: "مدل خودرو را وارد کنید",
  },
  {
    label: "برند",
    name: "brand",
    type: "text",
    placeholder: "برند خودرو را وارد کنید",
  },
  {
    label: "رنگ",
    name: "color",
    type: "text",
    placeholder: "رنگ خودرو را وارد کنید",
  },
  {
    label: "شماره پلاک",
    name: "number",
    type: "text",
    placeholder: "شماره پلاک خودرو را وارد کنید",
  },
  {
    label: "سال ساخت ",
    name: "productYear",
    type: "text",
    placeholder: "سال ساخت  خودرو را وارد کنید",
  },
  // {
  //   label: "صاحب خودرو",
  //   name: "ownerId",
  //   type: "select",
  // },
];
