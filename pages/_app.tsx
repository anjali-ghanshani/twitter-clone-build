import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps} }: any) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp

// Higher order component
// allow us us the login state through out the sesison