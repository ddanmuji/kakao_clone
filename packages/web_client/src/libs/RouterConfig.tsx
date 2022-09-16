import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Home = lazy(() => import('../pages/HomePage'));

const RouterConfig = () => {
  const routes = useRoutes([{ path: '/', element: <Home /> }]);

  return routes;
};

export default RouterConfig;
