import { Nav } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Oxbury | Beer API</title>
      </Head>
      <div className="bg-slate-800 min-h-screen font-sans">
        <Nav />
        <div className="container mx-auto px-4 py-4">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
