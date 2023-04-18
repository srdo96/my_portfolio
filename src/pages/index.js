import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import sakibPic from "../../public/assets/sakib-pic.png";
import TransitionEffect from "@/components/TransitionEffect";
import sakibPic from "../../public/assets/sakib1.jpeg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sakib Rahman</title>
        <meta name="description" content="Portfolio of Sakib Rahman" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="p-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 rounded-full">
              <Image
                className="rounded-full shadow-md"
                src={sakibPic}
                alt="picture of sakib"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <AnimatedText
                text="Write Code For Fun"
                className="text-7xl text-left"
              />

              <p className="my-4 text-base font-medium">
                Whether I'm building an app or website, writing code is my happy
                place - it's where I go to explore new ideas and push my limits
                as a developer.
              </p>
              <div className="flex items-center  self-start mt-2">
                <Link
                  href=""
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark ease duration-300 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:sakib.rahman436@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
