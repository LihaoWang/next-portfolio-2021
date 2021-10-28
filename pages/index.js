import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useTheme } from "../ToggleContext";
export default function Home() {
  const darkTheme = useTheme();
  return (
    <div className={darkTheme ? "dark" : ""}>
      <Head>
        <title>Leo Wang | Portfolio</title>
        <meta name="title" property="og:title" content="Leo Wang | Portfolio" />
        <meta
          name="description"
          content="Leo is a Computer Science Master's student at NYU. I specialize in developing minimal web applications that solves real
          world problems"
        />
        <meta name="image" property="og:image" content="link-thumbnail.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-black">
        <Nav />
        <div className="w-5/6 m-auto max-w-screen-lg">
          <Hero />
          <Projects />
        </div>
        <Footer href="/" />
      </main>
    </div>
  );
}
