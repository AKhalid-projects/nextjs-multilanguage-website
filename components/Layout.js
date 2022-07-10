import Head from "../components/Head";
import Footer from "../components/Footer";
import { Header } from "./Header";

const Layout = ({ children, locale, locales, defaultLocale }) => (
  <div className="white">
    <Head />
    <Header/>
    {children}
    <Footer />
  </div>
);

export default Layout;
