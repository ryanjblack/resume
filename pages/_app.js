import '../styles/index.css'

import React, { Fragment } from 'react'
import Router from 'next/router'

import * as gtag from 'common/src/lib/gtag'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}