import { Menu } from '@firesoon/ant-ui/es/components/Sider/interface';

export type IMenu = Menu;
export const iconMap = {
  home: <img src={require('@/assets/首页.svg')} className="anticon" />,
  setting: <img src={require('@/assets/科室综合分析.svg')} className="anticon" />,
};

const menu: Array<Menu> = [
  {
    route: '/home',
    id: 'home',
    title: '首页',
    icon: <img src={require('@/assets/首页.svg')} className="anticon" />,
  },
  {
    route: '/home',
    id: '1',
    title: '科室综合分析',
    icon: <img src={require('@/assets/科室综合分析.svg')} className="anticon" />,
  },
  {
    route: '/home',
    id: '2',
    title: '病组综合分析',
    icon: <img src={require('@/assets/病组综合分析.svg')} className="anticon" />,
  },
  {
    route: '/home',
    id: '3',
    title: '医疗组综合分析',
    icon: <img src={require('@/assets/医疗组综合分析.svg')} className="anticon" />,
  },
  {
    route: '/home',
    id: '4',
    title: '医生综合分析',
    icon: <img src={require('@/assets/医生综合分析.svg')} className="anticon" />,
  },
  {
    route: '/home',
    id: '5',
    title: '事中监测分析',
    icon: <img src={require('@/assets/事中监测分析.svg')} className="anticon" />,
    children: [
      {
        title: '在院病例监测',
        id: 'deptAnalysis',
        route: '/home',
      },
      {
        title: '提交前病例监测',
        id: 'dGroupAnalysis',
        route: '/home',
      },
      {
        title: '已提交病例分析',
        id: 'caseAnalysis',
        route: '/home',
      },
    ]
  },
  {
    route: '/home',
    id: '6',
    title: '学科发展分析',
    icon: <img src={require('@/assets/学科发展分析.svg')} className="anticon" />,
  },
  {
    route: '/home',
    id: '7',
    title: '病例综合查询',
    icon: <img src={require('@/assets/病例综合查询.svg')} className="anticon" />,
  },
  {
    route: '/home',
    id: '8',
    title: '指标综合查询',
    icon: <img src={require('@/assets/指标综合查询.svg')} className="anticon" />,
  },
];

export const originFlatMenu = treeToArray(menu);

export interface IAuthMenu {
  searchTree: Menu[] | [];
  tree: Menu[] | [];
}
// 用来保存权限菜单和用来搜索的flat菜单
export const authMenu: IAuthMenu = {
  searchTree: [],
  set tree(list) {
    this.innerTree = list;
    this.searchTree = treeToArray(list);
  },
  get tree() {
    return this.innerTree || [];
  }
};

function treeToArray(tree) {
  const arr: Array<any> = [];
  const loop = (data) => {
    data.forEach((k: any) => {
      if (k.children && k.children.length) {
        arr.push(k);
        loop(k.children);
      } else {
        arr.push(k);
      }
    });
  };
  loop(tree);
  return arr;
}

export default menu;
