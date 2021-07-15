import React from 'react';
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'chartPage', en);
i18next.addResourceBundle('tr', 'chartPage', tr);
i18next.addResourceBundle('ar', 'chartPage', ar);


const ChartingConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/charting',
            exact    : true,
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/view_record',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/location',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/demographic',
            component: React.lazy(() => import('./demographic/DemographicApp'))
        },
        {
            path     : '/charting/flowsheets',
            exact    : true,
            component: React.lazy(() => import('./flowsheets/FlowsheetApp'))
        },
        {
            path     : '/charting/flowsheets/patients',
            component: React.lazy(() => import('./flowsheets/Patients'))
        },
        {
            path     : '/charting/templates',
            exact    : true,
            component: React.lazy(() => import('./templates/TemplateApp'))
        },
        {
            path     : '/charting/wellness',
            exact    : true,
            component: React.lazy(() => import('./wellness/WellnessApp'))
        },
        {
            path     : '/charting/problem',
            exact    : true,
            component: React.lazy(() => import('./problem/ProblemSelectionGridApp'))
        },
        {
            path     : '/charting/summary',
            exact    : true,
            component: React.lazy(() => import('./summary/SummaryApp'))
        },
        {
            path     : '/charting/messages',
            exact    : true,
            component: React.lazy(() => import('./message/MessageApp'))
        },
        // {
        //     path     : '/charting/newNote',
        //     exact    : true,
        //     component: React.lazy(() => import('./Charting'))
        // },
        {
            path     : '/charting/free-text',
            exact    : true,
            component: React.lazy(() => import('./freeText/FreeTextApp'))
        },
        {
            path     : '/charting/old-notes',
            exact    : true,
            component: React.lazy(() => import('./oldNotes/OldNotesApp'))
        },
        {
            path     : '/charting/preview',
            exact    : true,
            component: React.lazy(() => import('./preview/PreviewApp'))
        }
    ]
};

export default ChartingConfig;