import React from 'react';
import './DetailBlogStyle.css'
import { FullArticle } from './FullArticle'
import { Author } from './Author';
import { useLocation } from 'react-router-dom';



export const DetailBlog = () => {
  const location = useLocation();
  const { title, author } = location.state || {};

  return (
    <div id='detailBlog'>
      <FullArticle title={title} />
      <Author authorName={author} />
    </div>
  )
}
