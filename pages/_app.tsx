import "../styles/globals.css";
import "../styles/cards.css";
import background from "../public/imageSource/background.png"
import type { AppProps } from "next/app";
import { HomePage } from "../components/layouts/index";
import Header from "../pages/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HomePage style={{backgroundImage: `url(${background.src})`, height: '1080px'}}>
      <Header />
      <Component {...pageProps} />
    </HomePage>
  );
}

export default MyApp;
