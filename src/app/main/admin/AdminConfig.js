import React from 'react';
import i18next from 'i18next';

const AdminConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/admin/associated-diagnoses',
            exact    : true,
            component: React.lazy(() => import('./diagnoses/AssociatedDiagnosesApp.js'))
        },
    ]
};

export default AdminConfig;