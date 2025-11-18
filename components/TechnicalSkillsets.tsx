import TechnicalSkillset from "./TechnicalSkillset";
import TsIcon from "@/public/tech-icons/ts";
import ReactIcon from "@/public/tech-icons/react";
import NextjsIcon from "@/public/tech-icons/nextjs";
import JsIcon from "@/public/tech-icons/js";
import StyledComponentsIcon from "@/public/tech-icons/styled-components";
import PrismaIcon from "@/public/tech-icons/prisma";
import EjsIcon from "@/public/tech-icons/ejs";
import PostgresIcon from "@/public/tech-icons/postgres";
import ExpressjsIcon from "@/public/tech-icons/expressjs";
import HtmlIcon from "@/public/tech-icons/html";
import CssIcon from "@/public/tech-icons/css";
import SassIcon from "@/public/tech-icons/sass";

import { backgroundColors } from "@/lib/techColors";
import Title from "./Title";
import FirebaseIcon from "@/public/tech-icons/firebase";
import MongodbIcon from "@/public/tech-icons/mongodb";
import VscodeIcon from "@/public/tech-icons/vscode";
import VercelIcon from "@/public/tech-icons/vercel";
import SvelteIcon from "@/public/tech-icons/svelte";
import DjsIcon from "@/public/tech-icons/djs";
import NodejsIcon from "@/public/tech-icons/nodejs";
import DockerIcon from "@/public/tech-icons/docker";
import GitIcon from "@/public/tech-icons/git";
import NetlifyIcon from "@/public/tech-icons/netlify";
import SupabaseIcon from "@/public/tech-icons/supabase";
import AdobeXdIcon from "@/public/tech-icons/adobeXdSvg";
import FigmaIcon from "@/public/tech-icons/figma";
import PythonIcon from "@/public/tech-icons/python";
import FastapiIcon from "@/public/tech-icons/fastapi";

const TechnicalSkillsets = () => {
  return (
    <>
      <div>
        <Title title="Technical Skillsets" />

        <div className="flex gap-3 items-center flex-wrap">
          <TechnicalSkillset
            backgroundHexColor={backgroundColors.react}
            textColor="white"
          >
            <ReactIcon />
            React
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.next}
            textColor="white"
          >
            <NextjsIcon />
            Next
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.javascript}
            textColor="black"
          >
            <JsIcon />
            JavaScript
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.typescript}
            textColor="white"
          >
            <TsIcon />
            Typescript
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.styledComponents}
            textColor="white"
          >
            <StyledComponentsIcon />
            Styled Components
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.prisma}
            textColor="white"
          >
            <PrismaIcon />
            Prisma
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.ejs}
            textColor="white"
          >
            <EjsIcon />
            EJS
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.postgres}
            textColor="white"
          >
            <PostgresIcon />
            PostgreSQL
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.expressjs}
            textColor="white"
          >
            <ExpressjsIcon />
            Express.js
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.html5}
            textColor="white"
          >
            <HtmlIcon />
            HTML5
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.css3}
            textColor="white"
          >
            <CssIcon />
            CSS3
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.sass}
            textColor="white"
          >
            <SassIcon />
            Sass
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.firebase}
            textColor="white"
          >
            <FirebaseIcon />
            Firebase
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.mongodb}
            textColor="white"
          >
            <MongodbIcon />
            MongoDB
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.vscode}
            textColor="white"
          >
            <VscodeIcon />
            Visual Studio Code
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.vercel}
            textColor="white"
          >
            <VercelIcon />
            Vercel
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.svelte}
            textColor="white"
          >
            <SvelteIcon />
            Svelte
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.djs}
            textColor="white"
          >
            <DjsIcon />
            Discord.js
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.nodejs}
            textColor="white"
          >
            <NodejsIcon />
            Node.js
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.docker}
            textColor="white"
          >
            <DockerIcon />
            Docker
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.git}
            textColor="white"
          >
            <GitIcon />
            Git
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.netlify}
            textColor="white"
          >
            <NetlifyIcon />
            Netlify
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.supabase}
            textColor="white"
          >
            <SupabaseIcon />
            Supabase
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.adobeXd}
            textColor="white"
          >
            <AdobeXdIcon />
            Adobe XD
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.figma}
            textColor="white"
          >
            <FigmaIcon />
            Figma
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.python}
            textColor="white"
          >
            <PythonIcon />
            Python
          </TechnicalSkillset>

          <TechnicalSkillset
            backgroundHexColor={backgroundColors.fastapi}
            textColor="white"
          >
            <FastapiIcon />
            FastAPI
          </TechnicalSkillset>
        </div>
      </div>
    </>
  );
};

export default TechnicalSkillsets;
