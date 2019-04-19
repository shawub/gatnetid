import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useIdentity from "../utils/identity"

const SecondPage = () => {
  const user = useIdentity(); 
  let username = user === null?"Guest":user.user_metadata.full_name;
  return (

    <Layout>
      <SEO title="Page two" />
      <h1>Hi {username} from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default SecondPage
