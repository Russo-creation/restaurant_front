import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import "../styles/globals.scss";

import App from "next/app";
import { appWithTranslation } from "../i18n";

import { ThemeProvider } from "styled-components";
import { theme } from "../constants/Theme";

const makestore = () => store;
const wrapper = createWrapper(makestore);

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default wrapper.withRedux(appWithTranslation(MyApp));
