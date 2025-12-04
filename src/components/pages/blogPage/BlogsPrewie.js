import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const BlogsPrewie = () => {

    const blogs = useSelector(state => state.blogs);
    const filter = useSelector(state => state.filters)
    const [blogsArray, setBlogsArray] = useState(blogs);
    const blogButton = useRef(null);

    const { ref: blogsPrewieRef, inView: blogsPrewieInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    useEffect(() => {

        if (blogsArray.length < 1) {
            blogButton.current.style.display = 'none'
        } else {
            blogButton.current.style.display = 'flex'
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
        <div ref={blogsPrewieRef} className='blogsPrewie center'>
            <div className='blogsPrewie__filters'>
                {filter.map((item, index) =>
                    <button className={`blogsPrewie__filters_filter ${blogsPrewieInView ? 'animated' : ''}`}
                        style={{
                            '--delay': `${index * 0.4}s`
                        }}
                        onClick={handleFilter}>{item}</button>
                )}
            </div>
            <ul className='blogsPrewie__blogs'>
                {blogsArray.slice(0, 3).map(item => (
                    <li key={item.id} className='blogsPrewie__blog'>
                        <img className={`blogsPrewie__blog_photo ${blogsPrewieInView ? 'animated' : ''}`} src={item.photo} alt=''></img>
                        <div className={`blogsPrewie__blog_data ${blogsPrewieInView ? 'animated' : ''}`}>
                            <p className='blogsPrewie__blog_dateOfPublish'>{item.dateOfPublish}</p>
                            <p className='blogsPrewie__blog_author'>by : {item.author}</p>
                        </div>
                        <Link
                            to={'/detailBlog'}
                            state={{ title: item.title, author: item.author }}>
                            <h3 className={`blogsPrewie__blog_title ${blogsPrewieInView ? 'animated' : ''}`}>{item.title}</h3>
                        </Link>
                        <p className={`blogsPrewie__blog_article ${blogsPrewieInView ? 'animated' : ''}`}>{item.desr}</p>
                    </li>
                ))}
                <div ref={blogButton} className={`blogsPrewie__buttonWrapper ${blogsPrewieInView ? 'animated' : ''}`}>
                    <img className='blogsPrewie__buttonWraper_arrows' src='newsArrows.svg' alt='Blogs prewie navigation'></img>
                    <button className='blogsPrewie__buttonWrapper_button left' onClick={handleSwitchLeft}></button>
                    <button className='blogsPrewie__buttonWrapper_button right' onClick={handleSwitchRight}></button>
                </div>
            </ul>
        </div>
    )
}
