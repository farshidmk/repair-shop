import NewCarForm from "@/components/car/NewCarForm";
import React from "react";

type Props = {};

const NewCar = (props: Props) => {
  return (
    <div>
      <h1>وارد کردن ماشین جدد</h1>
      <NewCarForm />
    </div>
  );
};

export default NewCar;
