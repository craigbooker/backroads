import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default () => (
  <>
    <Layout>
      Hello world!<Link to="/blog/">Blog</Link>
    </Layout>
  </>
)
