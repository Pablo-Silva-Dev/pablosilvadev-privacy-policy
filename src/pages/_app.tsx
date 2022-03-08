import React from 'react';
import { AppProps } from "next/app";
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/Global'
import { theme } from '../theme/theme'

 function MyApp({ Component, pageProps } : AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
