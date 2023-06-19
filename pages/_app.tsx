import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.css'

import { store } from '@/app/store'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}
