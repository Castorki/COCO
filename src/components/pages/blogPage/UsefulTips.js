import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';


export const UsefulTips = () => {

  const tips = useSelector(state => state.tips);

  const { ref: usefulTipsRef, inView: usefulTipsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <div ref={usefulTipsRef} className='usefulTips center'>
      {tips.map((item, index) => (
        <div key={item.id} className={`usefulTips__item ${usefulTipsInView ? 'animated' : ''}`}
          style={{
            '--delay': `${(index + 2) * 0.4}s`
          }}>
          <img className='usefulTips__item_photo' src={item.photo} alt=''></img>
          <Link to={'/detailBlog'} state={{ title: item.title, author: item.author }} className='usefulTips__item_link'><h3 className='usefulTips__item_title'>{item.title}</h3></Link>
          <p className='usefulTips__item_article'>{item.article}</p>
        </div>
      ))}
    </div>
  )
}
