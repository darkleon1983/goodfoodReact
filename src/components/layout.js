import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/index.js"
import "./layout.css"
import { PageWrapper, ContentContainer } from "./StyledLayout"
import SiteName from "./SiteName"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageWrapper>
        <ContentContainer>
          <SiteName text={data.site.siteMetadata.title} />
          <main>{children}</main>
        </ContentContainer>
      </PageWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
