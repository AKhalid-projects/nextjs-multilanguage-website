import Head from "../components/Head";
import Footer from "../components/Footer";
import { Header } from "./Header";
import { PrimaryFeatures } from "./PrimaryFeatures";

const Layout = ({ children, locale, locales, defaultLocale }) => (
  <div className="white">
    <Head />
    <Header/>
    <PrimaryFeatures/>
    {children}
    <Footer />
  </div>
);

export default Layout;
