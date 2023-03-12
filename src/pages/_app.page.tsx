import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "@components";
import "../styles/globals.scss";

import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Giffine - Busca y encuentra...</title>
        <meta
          name="description"
          content="Giffine con puedes encontrar el regalo perfecto para cualquier persona."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
