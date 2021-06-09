import { history } from 'umi';
import { postMenu } from '@/services';
import menu, { originFlatMenu, authMenu, iconMap, IMenu } from '@/utils/menu';
import ErrorRender from '@/ErrorRender';

export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

// 手动添加hideMenu 的路由
const haveAccessedRoutes = ['/404', '/Private', '/home/detail'];

// 剔除没有配置的路由
// export function patchRoutes({ routes }) {
//   const routeList = routes[0].routes;
//   routes[0].routes = routeList.filter(v => haveAccessedRoutes.includes(v.path));
// }

export function render(oldRender) {
  // 保存sid和signKey
  if (history.location.query.sid) {
    localStorage.setItem('userInfo', JSON.stringify(history.location.query || {}));
  }

  authMenu.tree = menu;
  oldRender();

  // postMenu()
  //   .then(res => {
  //     authMenu.init = getAuthMenu(res.data);
  //     // 路由切换到第一个可点击的菜单
  //     if (haveAccessedRoutes.indexOf(history.location.pathname) === -1) {
  //       const pathname = findFirstMenuRoute(authMenu.tree);
  //       history.push(pathname);
  //     }
  //     oldRender();
  //   }).catch(e => {
  //   ErrorRender({ msg: e.message || e.msg});
  // })
}

// 与menu进行差异化比较 保存hideMenu hideChild的 最终全局只使用authMenu
function getAuthMenu(list) {
  function byServerMenu(curMenu, menus: IMenu[] = []) {
    curMenu.forEach(v => {
      const { authorityMenuCode } = v;
      // 一定是菜单项包含的
      const localMenuItem = originFlatMenu.find(itm => itm.id === authorityMenuCode);

      // 不是SubMenu的title路由
      if (!v.children) {
        haveAccessedRoutes.push(v.url);
      }

      let item;
      // 不会出现在配置项的菜单（不会出现在菜单项 仅在内部跳转）
      if (localMenuItem.isHideChild && localMenuItem.children) {
        item = localMenuItem;
        localMenuItem.children.forEach(lim => {
          haveAccessedRoutes.push(lim.route);
        });
      } else {
        item = {
          id: authorityMenuCode,
          title: v.authorityMenuName,
          route: v.url,
          icon: iconMap[authorityMenuCode],
          children: v.children && byServerMenu(v.children),
        };
      }
      menus.push(item);
    });
    return menus;
  }
  const menus = byServerMenu(list);
  // 保证所有的hideMenu放最后 （生成面包屑时是否有首页的判断可直接取第一个）
  return menus.concat(originFlatMenu.filter(v => v.isHide));
}

function findFirstMenuRoute(m) {
  const item = m.find(v => !v.isHide);
  return (item.isHideChild || !item.children) ? item.route : item.children[0].route;
}
