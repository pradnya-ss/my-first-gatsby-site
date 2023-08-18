import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return(
    <Layout pageTitle="About Us">
      <p>Hi there! I'm proud creator of this site, which I build with gatsby</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo title="About Us" />
    <meta name="description" content="About us page - define about company"></meta>
  </>
)

export default AboutPage