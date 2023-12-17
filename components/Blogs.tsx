import React from 'react'
import {Blog} from './index'
import { BLOGS } from '@/constants'

const Blogs = () => {
  return (
    <section className=' relative bg-slate-900 py-10 dark:bg-slate-900'>
       <div className='flex flex-wrap gap-4 justify-center'>
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