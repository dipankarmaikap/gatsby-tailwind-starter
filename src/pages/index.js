import React from "react";
import { Link } from "gatsby";
import Layout from "../components/base/Layout";
import SEO from "../components/base/SEO";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-4xl font-bold">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link className="underline" to="/page-2/">
      Go to page 2
    </Link>
  </Layout>
);

export default IndexPage;
