import React from 'react'
import { Prewie } from './Prewie'
import { OurOffers } from './OurOffers'
import { Advantages } from './Advantages'
import { GrowthWithUs } from './GrowthWithUs'
import { Partners } from './Partners'
import { Benefits } from './Benefits'

export const MainPage = () => {
  return (
    <div className='main '>
      <Prewie />
      <OurOffers />
      <Advantages />
      <GrowthWithUs />
      <Partners />
      <Benefits />
    </div>
  )
}
