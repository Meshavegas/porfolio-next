import React from "react";

type title = {
  title: string;
  isCenter: String;
};
export const Title = ({ title, isCenter }: title) => {
  return (
    <div className={`text-base text-6xl text-${isCenter} font-extrabold mb-6`}>
      {title}
    </div>
  );
};
