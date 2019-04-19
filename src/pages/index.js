import React from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import useIdentity from "../utils/identity"

// import registerServiceWorker from './registerServiceWorker';

const IndexPage = () => {
  const user = useIdentity(); 
  let username = user === null?"Guest":user.user_metadata.full_name;
  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi {username}</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Page 2</Link>
  </Layout>
)}

export default IndexPage
