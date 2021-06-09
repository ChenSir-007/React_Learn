// import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import icon from '@/assets/404.svg';

export default () => {
  const home = () => {
    history.push('/');
  };

  return (
    <div style={style.cage}>
      <img src={icon} style={style.icon} alt="404" />
      <div>
        <h1 style={style.h1}>404</h1>
        <div style={style.tip}>抱歉，你访问的页面不存在</div>
        <Button onClick={home} type="primary">返回首页</Button>
      </div>
    </div>
  );
};

const style = {
  cage: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 70,
  },
  h1: {
    marginBottom: 20,
    fontSize: 72,
    lineHeight: 1,
    fontWeight: 700,
  },
  tip: {
    marginBottom: 23,
    color: 'rgba(0, 0, 0, .45)',
    fontSize: 20,
    lineHeight: 1,
  }
};
