import React from 'react';
import { useInView } from 'react-intersection-observer';


export const OurSpecialization = () => {

    const { ref: specializationRef, inView: specializationInView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return (
        <div ref={specializationRef} className={`ourSpecialization center ${specializationInView ? 'animated' : ''}`}>
            <h2 className='ourSpecialization__title'>Powerful ideas & sales acceleration</h2>
            <p className='ourSpecialization__article'>
                We are a software development firm specializing in digital products. We build beautiful, functional and cross-platform solutions that are accessible to all.
            </p>
        </div>
    )
}
