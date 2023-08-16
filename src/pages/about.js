import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return(
    <Layout pageTitle="About Us">
      <p>Hi there! I'm proud creator of this site, which I build with gatsby</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>About us</title>
    <meta name="description" content="About us page - define about company"></meta>
  </>
)

export default AboutPage