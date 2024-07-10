import React from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

type Props = {
  errors: string[] | string | undefined | null;
};

const ShowErrors = ({ errors }: Props) => {
  if (!errors) return null;
  if (typeof errors === "string") {
    return (
      <div role="alert" className="alert alert-error">
        <MdOutlineReportGmailerrorred />
        <span>{errors}</span>
      </div>
    );
  }
  if (errors.length > 0) {
    return (
      <div
        role="alert"
        className="alert alert-error flex flex-col justify-start items-start"
      >
        <div className="flex items-center gap-2">
          <MdOutlineReportGmailerrorred />
          <h4 className="font-extrabold">خطا</h4>
        </div>
        <ul className="list-disc mr-8">
          {errors.map((e) => (
            <li key={e} className="text-slate-100 text-xl ">
              {e}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

export default ShowErrors;
