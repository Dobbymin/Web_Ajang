import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

/* eslint-disable react/prop-types */
const NotAuthRoutes = ({ isAuth }) => {
    return isAuth ? <Navigate to={'/'} /> : <Outlet />;
};

export default NotAuthRoutes;
