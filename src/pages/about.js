import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import newsContext from '../context/news/newsContext'

const About = () => {
  const a = useContext(newsContext);
  
  return (
    <Layout>
        <div> <h2>This is about page created by {a.name}</h2></div>
    </Layout>
  )
}

export default About