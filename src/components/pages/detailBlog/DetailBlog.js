import React from 'react';
import './DetailBlogStyle.css'
import { FullArticle } from './FullArticle'
import { Author } from './Author';

export const DetailBlog = () => {
  return (
    <div id='detailBlog'>
      <FullArticle />
      <Author />
    </div>
  )
}
