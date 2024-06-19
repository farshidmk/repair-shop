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
      <div role="alert" className="alert alert-error">
        <MdOutlineReportGmailerrorred />
        <h4>خطا</h4>
        <ul>
          {errors.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

export default ShowErrors;
