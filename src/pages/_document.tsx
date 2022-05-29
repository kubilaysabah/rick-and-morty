// Next
import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentInitialProps, DocumentContext } from "next/document";

// React
import type { ReactElement } from "react";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        return await Document.getInitialProps(ctx)
    }

    render(): ReactElement {
        return (
            <Html>
                <Head />
                <body className="bg-[#24282f]">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}