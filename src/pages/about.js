import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import About from "../components/About";
import config from "../../data/SiteConfig";

const AboutPage = () => (
  <Layout>
    <main>
      <Helmet title={`About | ${config.siteTitle}`} />
      <About />
    </main>
  </Layout>
);

export default AboutPage;
