interface TitleProps {
  title: string;
  align?: "left" | "center" | "right";
}

const Title: React.FC<TitleProps> = ({ title, align = "left" }) => {
  const alignment =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <h1
      className={`
        text-5xl 
        font-extrabold 
        mb-6
        text-green
        ${alignment}
      `}
    >
      {title}
    </h1>
  );
};

export default Title;
