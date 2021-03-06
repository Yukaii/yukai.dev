import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Meow" keywords={[`Yukai Huang`, `yukai.dev`, `yukaii.tw`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Hi, I'm Yukai, <br></br> a <em>Software Developer</em>.</h1>
    <div className="container" style={{ margin: '2rem 0 1rem', maxWidth: '100%' }}>
      <p>You can find me on <a href="https://github.com/Yukaii">GitHub</a>, <a href="https://twitter.com/yukaii_h">Twitter</a>, <a href="https://www.linkedin.com/in/yukaihuangtw/">LinkedIn</a> or <a href="https://www.facebook.com/yukaihuangtw">Facebook</a>.</p>
      <p>Read my blog on <a href="https://yukaii.tw">Daily Oops</a>(in Traditional Chinese).</p>
    </div>
    <small>This site is under construction.</small>
  </Layout>
)

export default IndexPage
