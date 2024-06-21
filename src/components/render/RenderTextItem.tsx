import { TextInputItem } from "@/types/render";
import React from "react";

const RenderTextItem = ({
  label,
  name,
  placeholder,
  className = "",
  useFormRegisterReturn,
}: TextInputItem) => {
  return (
    <label className="input input-bordered flex items-center gap-2 mt-2 mb-2">
      {label}
      <input
        className={"grow" + className}
        placeholder={placeholder}
        {...useFormRegisterReturn}
      />
    </label>
  );
};

export default RenderTextItem;
