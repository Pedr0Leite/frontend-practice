import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  const currentRouter = router.pathname != "/";

  return (
    <>
      {currentRouter ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
