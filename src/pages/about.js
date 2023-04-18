import AnimatedText from "@/components/AnimatedText";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import pic from "../../public/assets/sakib-2.webp";

const about = () => {
  return (
    <>
      <Head>
        <title>Sakib Rahman | About</title>
        <meta name="description" content="This page about sakib rahman" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Sakib Rahman, a web developer and a programmer like to
                make fun and interactive things with code.
              </p>
              <div>
                <Skills />
              </div>
              <p></p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={pic}
                alt="sakib"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
