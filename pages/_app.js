import { GlobalStyle } from "../lib/globalstyle/globalstyle";
import Footer from "../universalComponents/footer";
import Nav from "../components/navbar";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
