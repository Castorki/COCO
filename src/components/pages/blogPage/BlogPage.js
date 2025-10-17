import React from 'react'
import './BlogStyle.css'
import { BlogHeader } from './BlogHeader'
import { BlogsPrewie } from './BlogsPrewie'

export const BlogPage = () => {
    return (
        <div id='blogPage'>
            <BlogHeader />
            <BlogsPrewie />
        </div>
    )
}
