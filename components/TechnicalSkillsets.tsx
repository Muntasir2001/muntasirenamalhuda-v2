import TechnicalSkillset from "./TechnicalSkillset";
import HtmlIcon from "@/public/tech-icons/html";
import TsIcon from "@/public/tech-icons/ts";
import ReactIcon from "@/public/tech-icons/react";
import NextjsIcon from "@/public/tech-icons/nextjs";

const TechnicalSkillsets = () => {
  return (
    <>
      <div className="flex gap-3 items-center flex-wrap">
        <TechnicalSkillset backgroundHexColor="#20232A" textColor="white">
          <ReactIcon />
          React
        </TechnicalSkillset>

        <TechnicalSkillset backgroundHexColor="#E44D26" textColor="white">
          <HtmlIcon />
          HTML5
        </TechnicalSkillset>

        <TechnicalSkillset backgroundHexColor="#000" textColor="white">
          <NextjsIcon />
          Next
        </TechnicalSkillset>
      </div>
    </>
  );
};

export default TechnicalSkillsets;
