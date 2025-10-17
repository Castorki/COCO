import React from 'react'

export const BlogHeader = () => {
    return (
        <div className='blogHeader center'>
            <h2 className='blogHeader__title'>Activity & Updates</h2>
            <p className='blogHeader__article'>Our biggest challenge is making sure we're always designing and building products that will help you run your business better.</p>
            <div className='blogHeader__background'>
                <div className='blogHeader__background_redCircle'></div>
                <div className='blogHeader__background_greenCircle'></div>
            </div>
        </div>
    )
}
