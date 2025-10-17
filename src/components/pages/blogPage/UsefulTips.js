import React from 'react'

export const UsefulTips = () => {
  return (
    <div className='usefulTips center'>
      <div className='usefulTips__item'>
        <img className='usefulTips__item_photo' src='AWS.png' alt=''></img>
        <h3 className='usefulTips__item_title'>How we perform long-running tasks using AWS services</h3>
        <p className='usefulTips__item_article'>Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools.</p>
      </div>
      <div className='usefulTips__item'>
        <img className='usefulTips__item_photo' src='userResearch.png' alt=''></img>
        <h3 className='usefulTips__item_title'>How to ask when doing User Research</h3>
        <p className='usefulTips__item_article'>Bro, the story is that you want to make an application for buying and selling goods on the market. During user research, what do you think you will ask people?</p>
      </div>
      <div className='usefulTips__item'>
        <img className='usefulTips__item_photo' src='layout.png' alt=''></img>
        <h3 className='usefulTips__item_title'>Layout Exploration — Simple exercise but big effect</h3>
        <p className='usefulTips__item_article'>Make alternatives or other options for the design we are making.
          For example, we are creating a website design. Then there is the testimonial section.</p>
      </div>
      <div className='usefulTips__item'>
        <img className='usefulTips__item_photo' src='webFlow.png' alt=''></img>
        <h3 className='usefulTips__item_title'>Webflow Break the Coding Barrier</h3>
        <p className='usefulTips__item_article'>Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools.</p>
      </div>
    </div>
  )
}
