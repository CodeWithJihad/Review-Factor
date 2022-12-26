import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>
       <NextNProgress color="#54B435" />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
