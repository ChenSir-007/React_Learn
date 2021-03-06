import React from 'react';
import { Breadcurmb } from '@firesoon/ant-ui';
import { useDispatch, useSelector } from 'dva';
import { hasHome } from '@/utils/utils';
import { HOME_ID } from '@/utils/constant';

export default React.memo(() => {
  const breadcrumbMenus = useSelector(({ breadcrumb }: any) => breadcrumb.breadcrumbMenus);
  const dispatch = useDispatch();

  const onClick = (_, menu, idx) => {
    dispatch({
      type: 'breadcrumb/to',
      payload: {
        targetMenu: menu,
        idx,
      }
    });
  };

  const home = hasHome() ? HOME_ID : '';

  return (
    <Breadcurmb onLink={onClick} pathList={breadcrumbMenus} home={home} />
  );
});
