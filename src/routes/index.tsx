import { lazy } from "react";

// Pages
export const Map = lazy(() => import('../pages/Home/Map'));
export const Detail = lazy(() => import('../pages/Home/Detail'));

const publicRoutes = [
    { path: "/", exact: true, component: <Map /> },
    { path: "/detail/:country", component: <Detail /> },
]; 

export { publicRoutes };
