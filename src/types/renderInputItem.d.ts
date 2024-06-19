export type RenderInputItem<T> = {
  label: string;
  name: keyof T;
  className?: string;
  type?: React.HTMLInputTypeAttribute;
};
