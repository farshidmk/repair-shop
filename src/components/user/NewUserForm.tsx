"use client";
import { serverCall } from "@/services/api";
import { RenderFormItemType } from "@/types/render";
import { ServerCallType } from "@/types/server";
import { User } from "@prisma/client";
import { DefaultError, useMutation, useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import RenderFormItem from "../render/RenderFormItem";
import ShowErrors from "../showError/ShowErrors";

type Props = {};

type UserWithoutId = Omit<User, "id">;

const NewUserForm = (props: Props) => {
  const { data, status } = useQuery({
    queryKey: ["user"],
  });
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
    mutate({
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
        <RenderFormItem
          {...item}
          useFormRegisterReturn={{
            ...register(item.name as keyof Omit<User, "id">, {
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

const USER_ROLE = ["Administrator", "repairShopUser", "user"];
const NEW_USER_ITEM: RenderFormItemType[] = [
  {
    label: "نام",
    name: "firstName",
    type: "text",
    placeholder: "نام را وارد کنید",
  },
  {
    label: "نام خانوادگی",
    name: "lastName",
    type: "text",
    placeholder: "نام خانوادگی را وارد کنید",
  },
  {
    label: "رمز عبور",
    name: "password",
    type: "text",
    placeholder: "رمز عبور را وارد کنید",
  },
  {
    label: "شماره تلفن",
    name: "phoneNumber",
    type: "text",
    placeholder: "شماره تلفن را وارد کنید",
  },
  {
    label: "نام کاربری",
    name: "username",
    type: "text",
    placeholder: "نام کاربری را وارد کنید",
  },
  {
    label: "نقش",
    name: "role",
    type: "select",
    options: USER_ROLE.map((role) => ({ label: role, value: role })),
  },
];
