import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from 'netlify-identity-widget';

const IndexPage = () => {

  const [userObj, setUserObj] = useState({
    isAuthenticated: false,
    user: null
  });

  useEffect(()=> {
    // You must run this once before trying to interact with the widget
    netlifyIdentity.init();
    netlifyIdentity.open('login');
    console.log(userObj.user);
    return () => {
      netlifyIdentity.logout();
    };
  })

  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi {userObj.user}</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)}

export default IndexPage
