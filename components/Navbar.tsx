import Image from "next/image";
import Link from "next/link";
import Layout from "./Layout";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <>
      <Layout>
        <nav className="flex py-8  items-center">
          <Link href="/">
            <Image
              src="/noob_dev_final_cropped_transparent.svg"
              alt="Logo"
              width={60}
              height={50}
              className="cursor-pointer border-b-white "
            />
          </Link>

          <div className="flex space-x-8 text-white font-medium justify-self-center mx-auto">
            <Link href="/">About Me</Link>
            <Link href="/">Projects</Link>
          </div>

          <Button className="font-bold">Contact Me</Button>
        </nav>
      </Layout>
    </>
  );
};

export default Navbar;
