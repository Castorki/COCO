import React from 'react'
import './BlogStyle.css'
import { BlogHeader } from './BlogHeader'
import { BlogsPrewie } from './BlogsPrewie'
import { UsefulTips } from './UsefulTips'

export const BlogPage = () => {
    return (
        <div id='blogPage'>
            <BlogHeader />
            <BlogsPrewie />
            <UsefulTips />
        </div>
    )
}
