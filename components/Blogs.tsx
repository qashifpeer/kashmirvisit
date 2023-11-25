import React from 'react'
import {Blog} from './index'
import { BLOGS } from '@/constants'

const Blogs = () => {
  return (
    <section className=' relative bg-purple-300 py-10'>
       <div className='flex flex-wrap gap-4'>
        {
            BLOGS.map((blog) =>
            <Blog 
            blogId={blog.blogId}
            blogUrl= {blog.blogImageUrl}
            place = {blog.blogPlace}
            date = {blog.blogDate}
            title = {blog.blogTitle}
            text= {blog.blogText}
            
            />
            )
        }
            
       </div>
    </section>
  )
}

export default Blogs