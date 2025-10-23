import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const UsefulTips = () => {

  const tips = useSelector(state => state.tips)

  return (
    <div className='usefulTips center'>
      {tips.map(item => (
        <div key={item.id} className='usefulTips__item'>
          <img className='usefulTips__item_photo' src={item.photo} alt=''></img>
          <Link to={'/detailBlog'} state={{ title: item.title, author: item.author }} className='usefulTips__item_link'><h3 className='usefulTips__item_title'>{item.title}</h3></Link>
          <p className='usefulTips__item_article'>{item.article}</p>
        </div>
      ))}
    </div>
  )
}
