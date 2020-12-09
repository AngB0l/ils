import MainLayout from "./components/mainLayout";
import AuthorsTable from "./components/authors";
import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';


const configuredRoutes = [
    {
        exact: true,
        path: '/',
        layout: MainLayout,
        // component: lazy(() => import('./components/authors')),
    },
    {
        exact: true,
        path: '/authors',
        layout: MainLayout,
        component: lazy(() => import('./components/authors')),
    },
    {
        exact: true,
        path: '/publishers',
        layout: MainLayout,
        component: lazy(() => import('./components/publishers')),
    },
];

const constructRoutes = (routes) => (
    <Suspense fallback="Loading...">
        <Switch>
            {routes.map((route) => {
                const Layout = route.layout || Fragment;
                const Component = route.component;
                const key = route.path;

                return (
                    <Route
                        key={key}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => (
                            <Layout>
                                {route.routes
                                    ? constructRoutes(route.routes)
                                    : <Component {...props} />}
                            </Layout>
                        )}
                    />
                );
            })}
        </Switch>
    </Suspense>
);


function Routes() {
    return constructRoutes(configuredRoutes);
}

export default Routes;