import { SmileOutlined, HeartOutlined } from '@ant-design/icons';

const asideMenuConfig = [
  {
    name: '首页',
    path: '/home',
    icon: SmileOutlined,
  },
  {
    name: '图表',
    path: '/dashboard',
    icon: HeartOutlined,
  },
  {
    name: '表格',
    path: '/antdTable',
    icon: HeartOutlined,
  },
  {
    name: '卡片',
    path: '/cardList',
    icon: HeartOutlined,
  },
  {
    name: '系统设置',
    path: '/system',
    icon: HeartOutlined,
    children: [
      {
        name: '系统设置区块',
        path: '/system/systemBlockSetting',
        icon: HeartOutlined,
      },
    ],
  },

];

export { asideMenuConfig };
