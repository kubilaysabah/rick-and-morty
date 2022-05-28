// Next
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

// React
import type { FC, ReactElement } from "react";

// Styles
import "styles/globals.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps): ReactElement<AppProps> => {
  return (
    <Component {...pageProps} />
  )
}

export default appWithTranslation(MyApp)
