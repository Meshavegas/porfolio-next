type title = {
  paragraphe: string;
  isCenter: String;
};
export const SubTitle = ({ paragraphe, isCenter }: title) => {
  return <div className="text-2xl font-semibold">{paragraphe}</div>;
};
