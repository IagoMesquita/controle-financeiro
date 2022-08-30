import "../styles/globals.tsx";
import type { AppProps } from "next/app";
import MainContainer from "../components/MainContainer";
import { GlobalStyle } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </>
  );
}

export default MyApp;
