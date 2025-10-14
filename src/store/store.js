import { configureStore } from '@reduxjs/toolkit';
import questions from '../components/slices/questionsSlicer';

export const store = configureStore({
    reducer: {
        questions : questions,
    }
})