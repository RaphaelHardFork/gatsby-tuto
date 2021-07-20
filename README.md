# Mise en place d'un projet Gatsby

Démarrage avec un [starter officiel](https://github.com/gatsbyjs/gatsby-starter-blog)

## Création du repo

```zsh
gatsby new MyGatsbyProject https://github.com/gatsbyjs/gatsby-starter-blog.git
```

## Ajout de Chakra-UI

```zsh
yarn add @chakra-ui/gatsby-plugin @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

```zsh
yarn add @chakra-ui/gatsby-plugin
```

Puis ajouter dans `gatsby-config.js` :

```
`@chakra-ui/gatsby-plugin`
```

## Création d'un nouvel article

Ajouter un nouveau dossier dans `content` puis d'un fichier `index.md` avec l'en-tête :

```markdown
---
title: Nouveau post
date: "2021-07-20"
description: "Description du nouveau post"
---
```

Si le post contient des images ont peut les ajouter directement dans ce dossier.  
Ensuite le contenu du post est rédiger en format `markdown`

## Création d'une nouvel page

Une nouvelle page se crée à l'aide d'un component dans le dossier `pages`. La convention veut que les fichier component sont écrit **sans majuscule**.

**Nouvelle page `About` :**

```js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Heading } from "@chakra-ui/react"

const About = ({ location, data }) => {
  // data.site.siteMetadata.title
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <Seo title="🎉 About us" />
      <Heading as="h1">About us</Heading>
      <p>You will find more information about us on this page.</p>
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
```

La page est ensuite automatiquement "routée", on peut vérifier avec `/about`

## Modifier la signature (bio) en bas de post
