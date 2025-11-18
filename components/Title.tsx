interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <div className="mb-10">
      <h2 className="text-sub-heading font-bold  text-white">{title}</h2>
      <div className="bg-primary w-[187px] h-2.5"></div>
    </div>
  );
};

export default Title;
