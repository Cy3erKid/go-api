import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/css/main.css'
import '../styles/css/responsive.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Application({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Application
