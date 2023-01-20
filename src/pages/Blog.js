import React from 'react'
import CardDetails from '../components/Card/CardDetails'
import BannerBlog  from '../components/Banner/BannerBlog'
import {helmet} from 'react-helmet-async'
function Blog() {
  return (
    <div>
    <helmet>
    <title>Blog Details</title>
    <meta name="description" content="Blog" />
    <link rel="canonical" href="/blog" />
    </helmet>
<BannerBlog />
      <CardDetails />

    </div>
  )
}

export default Blog
