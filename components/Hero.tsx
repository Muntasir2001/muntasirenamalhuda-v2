import Link from "next/link";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <div className="py-32">
        <h1 className="text-6xl text-white font-bold leading-20">
          HEY! I&apos;m <span className="text-primary">Muntasir</span>,
          <br />
          Full Stack Software Engineer
        </h1>
        <div className="flex gap-5 items-center mt-10">
          <Button>About Me</Button>
          <Button
            className="bg-custom-background border-primary text-white"
            variant="outline"
          >
            Contact Me
          </Button>
          <div className="flex items-center gap-2">
            <Link href="/">
              <i className="ri-linkedin-box-fill text-white text-3xl"></i>
            </Link>
            <Link href="/">
              <i className="ri-instagram-line text-white text-3xl"></i>
            </Link>
            <Link href="/">
              <i className="ri-github-fill text-white text-3xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
