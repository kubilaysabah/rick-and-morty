// Next
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

// React
import type { FC, ReactElement } from "react";

// Redux
import { Provider } from "react-redux";
import store from "state";

// Styles
import "styles/globals.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps): ReactElement<AppProps> => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default appWithTranslation(MyApp)
