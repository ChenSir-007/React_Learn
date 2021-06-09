import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import Nav from './Header';
import CustomBreadcrumb from './Breadcrumb';
import Sider from './Sider';
import styles from './layout.less';

const BasicLayout: React.FC = (props) => {
  return (
    <ConfigProvider
      getPopupContainer={node => {
        if (node) {
          return node.parentNode as HTMLElement;
        }
        return document.body;
      }}
      locale={zhCN}>
      <div className={styles.body}>
        <Layout className={styles.bodySection}>
          <Nav />
          <Layout>
            <Sider />
            <Layout className={styles.contentLayout}>
              <CustomBreadcrumb />
              <div className={styles.contentSection}>
                {props.children}
              </div>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default BasicLayout;
