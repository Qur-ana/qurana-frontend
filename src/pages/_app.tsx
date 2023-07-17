import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Qurana</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  );
}
