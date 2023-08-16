//step 1: import react
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'


//step 2: define your component
const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the gatsby tutorial</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

//step 3: export your component
export default IndexPage