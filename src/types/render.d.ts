import { UseFormRegisterReturn } from "react-hook-form";

type BaseInput = {
  label: string;
  className?: string;
  name: string;
  useFormRegisterReturn?: UseFormRegisterReturn;
  placeholder?: string;
};

export type TextInputItem = {
  type: "text";
} & BaseInput;

export type SelectInputItem = {
  type: "select";
  options: SelectOption[];
} & BaseInput;

export type SelectOption = {
  label: string | number;
  value: boolean | string | number | undefined;
  className?: string;
};

export type RenderFormItemType = TextInputItem | SelectInputItem;
