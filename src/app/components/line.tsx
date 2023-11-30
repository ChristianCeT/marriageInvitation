import React from "react";

const Line = (props: any) => {
  const { color } = props;

  return (
    <div className={`h-[1px] ${color == undefined ? "bg-black" : color}`}></div>
  );
};

export default Line;
