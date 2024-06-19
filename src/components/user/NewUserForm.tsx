"use client";
import { serverCall } from "@/services/api";
import { ServerCallType } from "@/types/server";
import { User } from "@prisma/client";
import { DefaultError, useMutation } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ShowErrors from "../showError/ShowErrors";
import { yupResolver } from "@hookform/resolvers/yup";
import { carYupValidation } from "@/validations/carValidation";
import { RenderInputItem } from "@/types/renderInputItem";

type Props = {};

type UserWithoutId = Omit<User, "id">;

const NewUserForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserWithoutId>({
    defaultValues: {
      createdAt: new Date(),
    },
    // resolver: yupResolver(carYupValidation),
  });

  const { mutate, isPending } = useMutation<
    UserWithoutId,
    DefaultError,
    ServerCallType
  >({
    mutationFn: serverCall,
  });

  const onSubmit: SubmitHandler<UserWithoutId> = (data) => {
    serverCall({
      entity: "user",
      method: "post",
      data,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
    >
      {NEW_USER_ITEM.map((item) => (
        <label
          key={item.name}
          className="input input-bordered flex items-center gap-2 mt-2 mb-2"
        >
          {item.label}
          <input
            type={item.type}
            className="grow"
            placeholder={item.label}
            {...register(item.name as keyof Omit<User, "id">, {
              required: true,
            })}
          />
        </label>
      ))}
      <div>
        <label className="">نقش</label>
        <select
          className="select select-primary w-full max-w-xs"
          {...register("role", {
            required: true,
          })}
        >
          {/* <option disabled selected>What is the best TV show?</option> */}
          {USER_ROLE.map((role) => (
            <option key={role}>{role}</option>
          ))}
        </select>
      </div>

      <ShowErrors
        errors={Object.values(errors)
          .filter((e) => e.message)
          .map((e) => e.message!)}
      />

      <button
        type="submit"
        className="btn btn-success mt-3 w-full"
        disabled={isPending}
      >
        {isPending ? (
          <span className="loading loading-dots loading-xs "></span>
        ) : (
          "ثبت "
        )}
      </button>
    </form>
  );
};

export default NewUserForm;

const NEW_USER_ITEM: RenderInputItem<User>[] = [
  {
    label: "نام",
    name: "firstName",
  },
  {
    label: "نام خانوادگی",
    name: "lastName",
  },
  {
    label: "رمز عبور",
    name: "password",
  },
  {
    label: "شماره تلفن",
    name: "phoneNumber",
  },
  {
    label: "نام کاربری",
    name: "username",
  },
];

const USER_ROLE = ["Administrator", "repairShopUser", "user"];
