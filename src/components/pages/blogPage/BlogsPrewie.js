import React from 'react'

export const BlogsPrewie = () => {
    return (
        <div className='blogsPrewie center'>
            <div className='blogsPrewie__filters'>
                <p className='blogsPrewie__filters_filter'>View all</p>
                <p className='blogsPrewie__filters_filter'>Design</p>
                <p className='blogsPrewie__filters_filter'>Articles</p>
                <p className='blogsPrewie__filters_filter'>Product</p>
                <p className='blogsPrewie__filters_filter'>Software Development</p>
                <p className='blogsPrewie__filters_filter'>Customer Success</p>
            </div>
            <div className='blogsPrewie__blogs'>
                <div className='blogsPrewie__blog'>
                    <img className='blogsPrewie__blog_photo' src='userFlowImg.png' alt=''></img>
                    <p className='blogsPrewie__blog_dateOfPublish'>Published in Insight Jan 30, 2021</p>
                    <p className='blogsPrewie__blog_author'>by : Albert Sans</p>
                    <h3 className='blogsPrewie__blog_title'>Practice making User Flow</h3>
                    <p className='blogsPrewie__blog_article'>In this article, we'll cover how to create user flows</p>
                </div>
                <div className='blogsPrewie__blog'>
                    <img className='blogsPrewie__blog_photo' src='designePrinciplesImg.png' alt=''></img>
                    <p className='blogsPrewie__blog_dateOfPublish'>Published in Insight Jan 30, 2021</p>
                    <p className='blogsPrewie__blog_author'>by : Albert Sans</p>
                    <h3 className='blogsPrewie__blog_title'>Overview of the Design Principles</h3>
                    <p className='blogsPrewie__blog_article'>What are Design Principles?… To understand design principles, we first discuss the principles. </p>
                </div>
                <div className='blogsPrewie__buttonWrapper'>
                    <img className='blogsPrewie__buttonWraper_arrows' src='newsArrows.svg' alt='Blogs prewie navigation'></img>
                    <button className='blogsPrewie__buttonWrapper_button left'></button>
                    <button className='blogsPrewie__buttonWrapper_button right'></button>
                </div>
            </div>
        </div>
    )
}
