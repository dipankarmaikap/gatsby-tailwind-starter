import React from "react";
import { Link } from "gatsby";
import Layout from "../components/base/Layout";
import SEO from "../components/base/SEO";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 className="text-4xl font-bold">Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link className="underline" to="/">
      Go back to the homepage
    </Link>
  </Layout>
);

export default SecondPage;
