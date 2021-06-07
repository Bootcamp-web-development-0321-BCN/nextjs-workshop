import Navbar from '../components/Navbar/Navbar'
import '../styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}