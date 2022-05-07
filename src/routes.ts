import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const SystemBlockSetting = lazy(() => import('@/pages/SystemBlockSetting'));
const CardList = lazy(() => import('@/pages/CardList'));
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
      { path: '/cardList', component: CardList },
      { path: '/home', component: Home },
      {
        path: '/system/systemBlockSetting',
        component: SystemBlockSetting
      },

      {
        path: '/',
        redirect: '/dashboard',
      },
      { component: NotFound },
    ],
  },

];

export default routerConfig;
