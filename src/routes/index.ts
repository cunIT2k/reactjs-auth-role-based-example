import { RouteObject } from 'react-router-dom';
import { IRouter } from 'src/interfaces/IRoute';

const modulesRoute = () => {
  const getAllModule = require.context('./modules', true, /\.tsx$/);
  const routes: IRouter[] = [];

  getAllModule.keys().forEach((fileName) => {
    const module = getAllModule(fileName).default;
    routes.push(...module);
  });

  return routes;
};

const AppRoute: RouteObject[] = [...modulesRoute()];
export default AppRoute;
