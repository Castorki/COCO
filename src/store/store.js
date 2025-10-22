import { configureStore } from '@reduxjs/toolkit';
import questions from '../components/slices/questionsSlicer';
import offers from '../components/slices/ourOffersSlicer';
import advantages from '../components/slices/advantagesSlicer';
import partners from '../components/slices/partnersSlicer';
import benefits from '../components/slices/benefitsSlicer';
import news from '../components/slices/trendingNewsSlicer';
import growthWithUs from '../components/slices/growWithUsSlicer';
import rewies from '../components/slices/rewiesSlicer';
import belifs from '../components/slices/beliefsSlicer';
import team from '../components/slices/teamSlicer';
import plans from '../components/slices/pricingPlansSlicer';
import blogs from '../components/slices/blogsSlicer';
import filters from '../components/slices/filtersSlicer';
import tips from '../components/slices/tipsSlicer';
import articles from '../components/slices/articlesSlicer';



export const store = configureStore({
    reducer: {
        questions : questions,
        offers : offers,
        advantages : advantages,
        partners : partners,
        benefits : benefits,
        news : news,
        growthWithUs: growthWithUs,
        rewies: rewies,
        belifs: belifs,
        team: team,
        plans: plans,
        blogs: blogs,
        filters: filters,
        tips: tips,
        articles: articles
    }
})