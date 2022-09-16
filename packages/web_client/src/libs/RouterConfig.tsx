import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

const Friends = lazy(() => import('../pages/Friends'));
const Login = lazy(() => import('../pages/Login'));
const RoomDetail = lazy(() => import('../pages/RoomDetail'));
const RoomList = lazy(() => import('../pages/RoomList'));
const SeeMore = lazy(() => import('../pages/SeeMore'));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: '/', element: <Navigate to="/login" /> },
    { path: '/login', element: <Login /> },
    { path: '/friends', element: <Friends /> },
    { path: '/rooms', element: <RoomList /> },
    { path: '/rooms/:id', element: <RoomDetail /> },
    { path: '/more', element: <SeeMore /> },
  ]);

  return routes;
};

export default RouterConfig;
