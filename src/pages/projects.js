import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AlphaTools from "../../public/assets/alphaToolsCover.png";
import pcWorld from "../../public/assets/pcWorldCover.png";
import proTrainer from "../../public/assets/proTrainerCover.png";

const FeaturedProject = ({
  type,
  title,
  projectType,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article className="w-full p-12  flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <h5 className="capitalize font-normal text-dark/75 ">{projectType}</h5>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-3 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, projectType, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center  rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="mt-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <h5 className="capitalize font-normal text-dark/75 ">{projectType}</h5>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="w-full mt-3 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Sakib Rahman | Projects</title>
        <meta
          name="description"
          content="This page about my awesome projects"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="My Awesome Projects" className="mb-16" />
          <div className="grid grid-col-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Alpha Tools"
                projectType="Manufacturer Website"
                img={AlphaTools}
                summary="It is a manufacturer's website. Where manufacturers can add or remove their products. Can confirm customer payment. And the customer can also buy products and pay."
                link="https://alpha-tools-c9d53.web.app/"
                github="https://github.com/srdo96/manufacturer-website-client-side"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Website"
                title="PC World"
                projectType="Warehouse Management"
                img={pcWorld}
                // summary="It is a manufacturer's website. Where manufacturers can add or remove their products. Can confirm customer payment. And the customer can also buy products and pay."
                link="https://pc-world-5e4fb.web.app/"
                github="https://github.com/srdo96/warehouse-management-website-client-sid"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="WebSite"
                title="Pro Trainer"
                projectType=" Independent Service Provider"
                img={proTrainer}
                // summary="It is a manufacturer's website. Where manufacturers can add or remove their products. Can confirm customer payment. And the customer can also buy products and pay."
                link="https://alpha-tools-c9d53.web.app/"
                github="https://github.com/srdo96/manufacturer-website-client-side"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
