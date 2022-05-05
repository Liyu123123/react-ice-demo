import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const AntdTable = lazy(() => import('@/pages/AntdTable'));
const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/components/NotFound'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/dashboard', component: Dashboard },
      { path: '/antdTable', component: AntdTable },
      { path: '/', exact: true, component: Home },
      { component: NotFound },
    ],
  },
];

export default routerConfig;
