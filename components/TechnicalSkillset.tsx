interface Props {
  backgroundHexColor: string;
  textColor: "black" | "white";
  children: React.ReactNode;
}

const TechnicalSkillset = ({
  children,
  backgroundHexColor,
  textColor,
}: Props) => {
  return (
    <>
      <div
        className={`flex gap-3 items-center text-${textColor} bg-[${backgroundHexColor}] px-5 py-2 rounded-sm`}
      >
        {children}
      </div>
    </>
  );
};

export default TechnicalSkillset;
