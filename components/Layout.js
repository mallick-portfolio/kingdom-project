import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

export default function layout({ title, des, content, children, mainContent }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={content} content={des}></meta>
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

layout.defaultProps = {
  title: "default",
  des: "default page",
  content: "this is about page",
};
