import React from "react";
import Helmet from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";
import config from "../../data/SiteConfig";
import styles from "../components/layout.module.css";
export default ({ children }) => (
  <>
    <Header />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <div ClassName={styles}>{children}</div>
    <Footer />
  </>
);
