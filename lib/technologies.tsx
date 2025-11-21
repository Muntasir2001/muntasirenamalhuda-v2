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

export const technologies: Record<
	string,
	{
		icon: React.ReactNode;
		backgroundColor: string;
		textColor: "black" | "white";
		name: string;
	}
> = {
	react: {
		icon: <ReactIcon />,
		backgroundColor: "#20232A",
		textColor: "white",
		name: "React",
	},
	next: {
		icon: <NextjsIcon />,
		backgroundColor: "#000000",
		textColor: "white",
		name: "Next.js",
	},
	html5: {
		icon: <HtmlIcon />,
		backgroundColor: "#E44D26",
		textColor: "white",
		name: "HTML5",
	},
	javascript: {
		icon: <JsIcon />,
		backgroundColor: "#F7DF1E",
		textColor: "black",
		name: "JavaScript",
	},
	typescript: {
		icon: <TsIcon />,
		backgroundColor: "#007ACC",
		textColor: "white",
		name: "TypeScript",
	},
	styledComponents: {
		icon: <StyledComponentsIcon />,
		backgroundColor: "#DB7093",
		textColor: "white",
		name: "Styled Components",
	},
	prisma: {
		icon: <PrismaIcon />,
		backgroundColor: "#0C344B",
		textColor: "white",
		name: "Prisma",
	},
	vercel: {
		icon: <VercelIcon />,
		backgroundColor: "#000",
		textColor: "white",
		name: "Vercel",
	},
	ejs: {
		icon: <EjsIcon />,
		backgroundColor: "#90A93A",
		textColor: "white",
		name: "EJS",
	},
	postgres: {
		icon: <PostgresIcon />,
		backgroundColor: "#336791",
		textColor: "white",
		name: "PostgreSQL",
	},
	expressjs: {
		icon: <ExpressjsIcon />,
		backgroundColor: "#353535",
		textColor: "white",
		name: "Express.js",
	},
	css3: {
		icon: <CssIcon />,
		backgroundColor: "#264DE4",
		textColor: "white",
		name: "CSS3",
	},
	sass: {
		icon: <SassIcon />,
		backgroundColor: "#CD6799",
		textColor: "white",
		name: "Sass",
	},
	firebase: {
		icon: <FirebaseIcon />,
		backgroundColor: "#20232A",
		textColor: "white",
		name: "Firebase",
	},
	mongodb: {
		icon: <MongodbIcon />,
		backgroundColor: "#419644",
		textColor: "white",
		name: "MongoDB",
	},
	vscode: {
		icon: <VscodeIcon />,
		backgroundColor: "#20232A",
		textColor: "white",
		name: "Visual Studio Code",
	},
	svelte: {
		icon: <SvelteIcon />,
		backgroundColor: "#FF3E00",
		textColor: "white",
		name: "Svelte",
	},
	djs: {
		icon: <DjsIcon />,
		backgroundColor: "#090A16",
		textColor: "white",
		name: "Discord.js",
	},
	nodejs: {
		icon: <NodejsIcon />,
		backgroundColor: "#8CC84B",
		textColor: "white",
		name: "Node.js",
	},
	docker: {
		icon: <DockerIcon />,
		backgroundColor: "#2396ED",
		textColor: "white",
		name: "Docker",
	},
	git: {
		icon: <GitIcon />,
		backgroundColor: "#EE513B",
		textColor: "white",
		name: "Git",
	},
	supabase: {
		icon: <SupabaseIcon />,
		backgroundColor: "#1A1A1A",
		textColor: "white",
		name: "Supabase",
	},
	netlify: {
		icon: <NetlifyIcon />,
		backgroundColor: "#070E11",
		textColor: "white",
		name: "Netlify",
	},
	adobeXd: {
		icon: <AdobeXdIcon />,
		backgroundColor: "#272727",
		textColor: "white",
		name: "Adobe XD",
	},
	figma: {
		icon: <FigmaIcon />,
		backgroundColor: "#272727",
		textColor: "white",
		name: "Figma",
	},
	python: {
		icon: <PythonIcon />,
		backgroundColor: "#3776AB",
		textColor: "white",
		name: "Python",
	},
	fastapi: {
		icon: <FastapiIcon />,
		backgroundColor: "#00897A",
		textColor: "white",
		name: "FastAPI",
	},
};
