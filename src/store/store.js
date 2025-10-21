import { configureStore } from '@reduxjs/toolkit';
import questions from '../components/slices/questionsSlicer';
import offers from '../components/slices/ourOffersSlicer';
import advantages from '../components/slices/advantagesSlicer';
import partners from '../components/slices/partnersSlicer';
import benefits from '../components/slices/benefitsSlicer';
import news from '../components/slices/trendingNewsSlicer';
import growthWithUs from '../components/slices/growWithUsSlicer';
import rewies from '../components/slices/rewiesSlicer';



export const store = configureStore({
    reducer: {
        questions : questions,
        offers : offers,
        advantages : advantages,
        partners : partners,
        benefits : benefits,
        news : news,
        growthWithUs: growthWithUs,
        rewies: rewies
    }
})