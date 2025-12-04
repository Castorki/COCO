import React from 'react';
import { useInView } from 'react-intersection-observer';

export const BlogHeader = () => {

    const { ref: blogHeaderRef, inView: blogHeaderInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    return (
        <div ref={blogHeaderRef} className='blogHeader center'>
            <h2 className={`blogHeader__title ${blogHeaderInView ? 'animated' : ''}`}>Activity & Updates</h2>
            <p className={`blogHeader__article ${blogHeaderInView ? 'animated' : ''}`}>Our biggest challenge is making sure we're always designing and building products that will help you run your business better.</p>
            <div className='blogHeader__background'>
                <div className='blogHeader__background_redCircle'></div>
                <div className='blogHeader__background_greenCircle'></div>
            </div>
        </div>
    )
}
