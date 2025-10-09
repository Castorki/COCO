import React from 'react';
import './AboutPage.css';
import { AudienceAttention } from './AudienceAttention';
import { OurBeliefs } from './OurBeliefs';
import { OurSpecialization } from './OurSpecialization';

export const AboutPage = () => {
    return (
        <div id='about'>
            <AudienceAttention />
            <OurBeliefs />
            <OurSpecialization />
        </div>
    )
}
