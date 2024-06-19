"use client";
import { serverCall } from "@/services/api";
import { ServerCallType } from "@/types/server";
import { Car } from "@prisma/client";
import { DefaultError, useMutation } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ShowErrors from "../showError/ShowErrors";
import { yupResolver } from "@hookform/resolvers/yup";
import { carYupValidation } from "@/validations/carValidation";

type Props = {};

const NewCarForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Omit<Car, "id">>({
    defaultValues: {
      brand: "",
      color: "",
      model: "",
      number: "",
      owner: "",
    },
    resolver: yupResolver(carYupValidation),
  });

  const { mutate, isPending } = useMutation<Car, DefaultError, ServerCallType>({
    mutationFn: serverCall,
  });

  const onSubmit: SubmitHandler<Car> = (data) => {
    serverCall({
      entity: "car",
      method: "post",
      data,
    });
  };

  console.log({ errors });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("owner")} />
      <label className="input input-bordered flex items-center gap-2">
        صاحب ماشین
        <input
          type="text"
          className="grow"
          placeholder="صاحب ماشین"
          {...register("owner", { required: true })}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        برند
        <input {...register("brand", { required: true })} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        رنگ
        <input {...register("color", { required: true })} />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        مدل
        <input {...register("model", { required: true })} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        شماره پلاک
        <input {...register("number", { required: true })} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        سال ساخت
        <input {...register("product_year", { required: true })} type="date" />
      </label>

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
