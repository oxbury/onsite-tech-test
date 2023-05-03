import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Oxbury | Beer API</title>
      </Head>
      <body className="max-h-screen max-w-screen bg-slate-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
