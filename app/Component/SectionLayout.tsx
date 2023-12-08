import React from "react";

const SectionLayout = ({
  children,
  classNames,
  hauteur,
  sectionId,
}: {
  children: React.ReactNode;
  classNames: string;
  hauteur: string;
  sectionId: string;
}) => {
  return (
    <div
      className={`${classNames} flex justify-center py-24 md:py-52 max-h-[${hauteur}]`}
      // style={{ maxHeight: hauteur }}
      id={sectionId}
    >
      <div className={`w-[90%] md:w-[70%] `}>{children}</div>
    </div>
  );
};

export default SectionLayout;
