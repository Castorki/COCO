import React from 'react'
import './MainPage.css';
import { Prewie } from './Prewie'
import { OurOffers } from './OurOffers'
import { Advantages } from './Advantages'
import { GrowthWithUs } from './GrowthWithUs'
import { Partners } from './Partners'
import { Benefits } from './Benefits'
import { TrandingNews } from './TrandingNews'
import { Rewies } from './Rewies';

export const MainPage = () => {
  return (
    <div id='main'>
      <Prewie />
      <OurOffers />
      <Advantages />
      <GrowthWithUs />
      <Partners />
      <Benefits />
      <TrandingNews />
      <Rewies />
    </div>
  )
}
