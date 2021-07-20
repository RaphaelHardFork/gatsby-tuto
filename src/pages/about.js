import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button, Heading, Text } from "@chakra-ui/react"

const About = ({ location, data }) => {
  // data.site.siteMetadata.title
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <Seo title="🎉 About us" />
      <Heading as="h1">About us</Heading>
      <Text>Voici le contenu de la page ABOUT</Text>
      <Button colorScheme="red">Un bouton non utile</Button>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
