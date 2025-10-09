import React from 'react';
import './AboutPage.css';
import { AudienceAttention } from './AudienceAttention';
import { OurBeliefs } from './OurBeliefs';

export const AboutPage = () => {
    return (
        <div id='about'>
            <AudienceAttention />
            <OurBeliefs />
        </div>
    )
}
