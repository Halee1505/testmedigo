import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                <link rel="shortcut icon" type="image/png" href="/favicon.png" />
                <meta name="theme-color" content="#26cd7a" />
                <meta property="og:image" content="/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/favicon.png"></link>
                <meta name="theme-color" content="#26cd7a" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
