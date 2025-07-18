import React from 'react'
import { Company } from './Company'
import { Product } from './Product'
import { Discover } from './Discover'
import { HelpCenter } from './HelpCenter'

export const Navigation = () => {
  return (
    <div className='footer__nav'>
      <Company />
      <Product />
      <Discover />
      <HelpCenter />
    </div>
  )
}
