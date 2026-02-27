import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const BlogsPrewie = () => {

    const blogs = useSelector(state => state.blogs);
    const filter = useSelector(state => state.filters)
    const blogButton = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedItems, setDisplayedItems] = useState([]);
    const [direction, setDirection] = useState('');

    const { ref: blogsPrewieRef, inView: blogsPrewieInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    useEffect(() => {

        if (blogs.length < 1) {
            blogButton.current.style.display = 'none'
        } else {
            blogButton.current.style.display = 'flex'
        }
    })

    const getDisplayedItems = useCallback((index) => {
        if (blogs.length === 0) {
            return [];
        }

        const items = [];
        for (let i = -1; i <= 3; i++) {
            let itemIndex = index + i;
            if (itemIndex < 0) itemIndex += blogs.length;
            if (itemIndex >= blogs.length) itemIndex -= blogs.length;

            items.push({
                ...blogs[itemIndex]
            });
        }
        return items;
    },[blogs]);

    useEffect(() => {
        setDisplayedItems(getDisplayedItems(currentIndex));
    }, [getDisplayedItems, currentIndex]);

    const handleNext = () => {
        if (blogs.length === 0) return;

        setDirection('next');

        setCurrentIndex(prev => (prev + 1) % blogs.length);
    };

    const handlePrev = () => {
        if (blogs.length === 0) return;

        setDirection('prev');

        setCurrentIndex(prev => (prev - 1 + blogs.length) % blogs.length);
    };

    const handleFilter = (e) => {
        e.preventDefault();

        const filterValue = e.target.textContent.toLowerCase();

        if (filterValue !== 'view all') {
            const filteredBlogs = blogs.filter(blog =>
                blog.type.toLowerCase() === filterValue
            );

            setDisplayedItems(filteredBlogs);
        } else {
            setDisplayedItems(blogs);
        }

    }

    return (
        <div ref={blogsPrewieRef} className={`blogsPrewie center ${blogsPrewieInView ? 'loaded' : ''}`}>
            <div className='blogsPrewie__filters'>
                {filter.map((item, index) =>
                    <button className={`blogsPrewie__filters_filter ${blogsPrewieInView ? 'animated' : ''}`}
                        style={{
                            '--delay': `${index * 0.4}s`
                        }}
                        onClick={handleFilter}>{item}</button>
                )}
            </div>
            <ul className="blogsPrewie__blogs">
                {displayedItems.map((item, index) => (
                    <li key={`item_${index} - ${item.id}`} className={`blogsPrewie__blog ${`item-${index} `}
                    ${`slide-${direction}`}`}
                        style={{
                            'display': `${displayedItems.length >= 5 && index === 0 ? 'none' : ''}`
                        }}>
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
                    <button className='blogsPrewie__buttonWrapper_button left' onClick={handlePrev} disabled={displayedItems.length < 3}></button>
                    <button className='blogsPrewie__buttonWrapper_button right' onClick={handleNext} disabled={displayedItems.length < 3}></button>
                </div>
            </ul>
        </div>
    )
}
