import React from 'react'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../reducers/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
