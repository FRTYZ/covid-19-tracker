import { lazy } from "react";
import { Navigate } from "react-router-dom";

// Pages

import Map from "../pages/Home/Map";
import Detail from "../pages/Detail/Detail";

const publicRoutes = [
    { path: "/", component: <Map /> },
    { path: "/", exact: true, component: <Navigate to="/" />},
    { path: "/detail/:country", component: <Detail /> },
]; 

export { publicRoutes };
