import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const BlogsPrewie = () => {

    const blogs = useSelector(state => state.blogs);
    const filter = useSelector(state => state.filters)
    const [blogsArray, setBlogsArray] = useState(blogs);
    const blogButton = useRef(null)

    useEffect(() => {

        if (blogsArray.length < 1) {
            blogButton.current.style.display = 'none'
        }
    })

    const handleFilter = (e) => {
        e.preventDefault();

        const filterValue = e.target.textContent.toLowerCase();

        if (filterValue !== 'view all') {
            const filteredBlogs = blogs.filter(blog =>
                blog.type.toLowerCase() === filterValue
            );

            setBlogsArray(filteredBlogs);
        } else {
            setBlogsArray(blogs);
        }

    }


    const handleSwitchLeft = (e) => {
        e.preventDefault();

        setBlogsArray(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    }

    const handleSwitchRight = (e) => {
        e.preventDefault();

        setBlogsArray(prev => [...prev.slice(1), prev[0]])
    }

    return (
        <div className='blogsPrewie center'>
            <div className='blogsPrewie__filters'>
                {filter.map(item =>
                    <button className='blogsPrewie__filters_filter' onClick={handleFilter}>{item}</button>
                )}
            </div>
            <ul className='blogsPrewie__blogs'>
                {blogsArray.slice(0, 3).map(item => (
                    <li key={item.id} className='blogsPrewie__blog'>
                        <img className='blogsPrewie__blog_photo' src={item.photo} alt=''></img>
                        <p className='blogsPrewie__blog_dateOfPublish'>{item.dateOfPublish}</p>
                        <p className='blogsPrewie__blog_author'>{item.author}</p>
                        <Link to={'/detailBlog'}><h3 className='blogsPrewie__blog_title'>{item.title}</h3></Link>
                        <p className='blogsPrewie__blog_article'>{item.desr}</p>
                    </li>
                ))}
                <div ref={blogButton} className='blogsPrewie__buttonWrapper'>
                    <img className='blogsPrewie__buttonWraper_arrows' src='newsArrows.svg' alt='Blogs prewie navigation'></img>
                    <button className='blogsPrewie__buttonWrapper_button left' onClick={handleSwitchLeft}></button>
                    <button className='blogsPrewie__buttonWrapper_button right' onClick={handleSwitchRight}></button>
                </div>
            </ul>
        </div>
    )
}
