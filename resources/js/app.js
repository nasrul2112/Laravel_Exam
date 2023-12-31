import React from "react";
import { render } from 'react-dom';
import { InertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

const app = document.getElementById('app');

InertiaProgress.init();

render(
    <InertiaApp
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={_name =>
            //import semua komponen dari folder pages
            import('./Pages/${name}').then(module => module.default)
     }
     
    app 
    />
)