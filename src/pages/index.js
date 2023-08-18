//step 1: import react
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'


//step 2: define your component
const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the gatsby tutorial</p>
      <StaticImage
        alt="Lightech AV - About Us"
        src="../images/design-slide.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

//step 3: export your component
export default IndexPage