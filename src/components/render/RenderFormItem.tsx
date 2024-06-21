import { RenderFormItemType } from "@/types/render";
import React from "react";
import RenderTextItem from "./RenderTextItem";
import RenderSelectItem from "./RenderSelectItem";

const RenderFormItem = (props: RenderFormItemType) => {
  const { type } = props;

  if (type === "text") {
    return <RenderTextItem {...props} />;
  }
  if (type === "select") {
    return <RenderSelectItem {...props} />;
  }
  return <div>not defined format type</div>;
};

export default RenderFormItem;
