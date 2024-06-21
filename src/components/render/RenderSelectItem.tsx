import { SelectInputItem } from "@/types/render";
import React from "react";

const RenderSelectItem = ({
  label,
  name,
  className = "",
  options,
  useFormRegisterReturn,
}: SelectInputItem) => {
  return (
    <div
      className={
        "input input-bordered flex items-center gap-2 mt-2 mb-2" + className
      }
    >
      <label className="">{label}</label>
      <select
        className="select select-primary w-full max-w-xs"
        {...useFormRegisterReturn}
      >
        {options.map(({ label, value }) => (
          <option key={String(value)} value={String(value)}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RenderSelectItem;
