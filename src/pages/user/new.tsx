import NewCarForm from "@/components/car/NewCarForm";
import NewUserForm from "@/components/user/NewUserForm";
import React from "react";

type Props = {};

const NewCar = (props: Props) => {
  return (
    <div className="w-screen">
      <h1 className="font-extrabold text-4xl">ثبت نام کاربر جدید</h1>
      <div className="w-full max-w-lg flex justify-center">
        <NewUserForm />
      </div>
    </div>
  );
};

export default NewCar;
