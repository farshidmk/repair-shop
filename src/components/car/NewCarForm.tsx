"use client";
import { getQueryServerCall, serverCall } from "@/services/api";
import { ServerCallType, ServerResponseType } from "@/types/server";
import { Car, User } from "@prisma/client";
import { DefaultError, useMutation, useQuery } from "@tanstack/react-query";
import React, { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ShowErrors from "../showError/ShowErrors";
import { yupResolver } from "@hookform/resolvers/yup";
import { carYupValidation } from "@/validations/carValidation";
import { RenderFormItemType } from "@/types/render";
import RenderFormItem from "../render/RenderFormItem";

type Props = {};

type CarWithoutId = Omit<Car, "id">;

const NewCarForm = (props: Props) => {
  const [serverError, setServerError] = useState<string[] | undefined>(
    undefined
  );
  const { data: users, status: usersStatus } = useQuery<
    unknown,
    Error,
    User[] | undefined,
    string[]
  >({
    queryKey: ["user"],
    queryFn: getQueryServerCall,
    select(data: ServerResponseType<User[]>): User[] | undefined {
      if (data.isSuccessful) {
        return data.data!;
      }
      setServerError(data.error);
      return undefined;
    },
  });

  const carItems = useMemo(
    (): RenderFormItemType[] => [
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
      {
        label: "صاحب خودرو",
        name: "ownerId",
        type: "select",
        options:
          users?.map((u) => ({
            value: u.id,
            label: u.firstName + " " + u.lastName,
          })) || [],
      },
    ],
    []
  );

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {carItems.map((item) => (
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
        errors={
          Object.values(errors)
            .filter((e) => e.message)
            .map((e) => e.message!) || serverError
        }
      />

      <button type="submit" className="btn btn-success btn-wide mt-3">
        ثبت
      </button>
    </form>
  );
};

export default NewCarForm;
