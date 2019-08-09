import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from '../components/Gallery'

export default function IndexPage() {

  return (
    <Layout>
    <SEO title="Home" />
    <Gallery />
  </Layout>
  )
}

