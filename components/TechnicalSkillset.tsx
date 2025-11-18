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
        className={`flex gap-3 items-center px-5 py-2 rounded-sm`}
        style={{ backgroundColor: backgroundHexColor, color: textColor }}
      >
        {children}
      </div>
    </>
  );
};

export default TechnicalSkillset;
