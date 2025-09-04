import React from 'react'
import { Prewie } from './Prewie'
import { OurOffers } from './OurOffers'
import { Advantages } from './Advantages'
import { GrowthWithUs } from './GrowthWithUs'

export const MainPage = () => {
  return (
    <div className='main '>
      <Prewie />
      <OurOffers />
      <Advantages />
      <GrowthWithUs />
    </div>
  )
}
