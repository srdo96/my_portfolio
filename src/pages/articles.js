import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import logo from "../../public/assets/fast-time (2).png";
const articles = () => {
  return (
    <>
      <Head>
        <title>Sakib | Articles</title>
        <meta name="this is article page" content="My articles" />
      </Head>
      <main>
        <Layout>
          <div className="flex flex-col justify-center items-center">
            <Image className="" src={logo} alt="picture of sakib" />
            <AnimatedText
              text="Coming Soon!"
              className="text-center text-2xl font-normal"
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default articles;
