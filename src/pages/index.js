import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welkom op mijn webstek</h1>
    <p>
      Deze webstek is helemaal gebouwd met behulp van Gatsby, een héél mooi
      'framework', gebaseerd op React. Maar lang niet zo moeilijk als React,
      vind ik althans.
    </p>
    <p>
      Ga maar eens kijken:{" "}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        gatsbyjs.org
      </a>
    </p>
  </Layout>
)

export default IndexPage
