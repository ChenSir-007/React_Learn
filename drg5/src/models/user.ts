import { cloneDeep } from 'lodash';
// import { message } from 'antd';
import * as api from '@/services';

const initialState = {
  roleList: [],
  chartNumber: {},
};

const namespace = 'user';

export default {
  namespace,
  state: cloneDeep(initialState),
  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'queryUserInfo',
      });
    },
  },
  effects: {
    // * logout(_, { call }) {
    //   const data = yield call(api.logout, {});
    //   if (data && data.httpCode === 200) {
    //     localStorage.clear();
    //     sessionStorage.clear();
    //     window.location.href = data.data;
    //   }
    // },
    // * changeRole({ payload }, { call }) {
    //   const res = yield call(api.postChangeRole, payload);
    //   if (res.httpCode === 200) {
    //     window.location.reload();
    //   }
    // },
    * queryUserInfo(_, { call, put, all }) {
      const res = yield all([
        call(api.getRole),
        call(api.getUserInfo)
      ]);
      // console.log(res)
      if (res[1].httpCode === 200) {
        const d = res[1].data;
        yield put({
          type: 'updateState',
          payload: {
            userInfo: d,
          }
        });
      }
      if (res[0].httpCode === 200) {
        const v = res[0].data;
        yield put({
          type: 'updateState',
          payload: {
            roleList: v,
          }
        });
      }
    },
    *totalChart(_,{call,put}){
      const totalchart = yield call(api.getTotalChart);
      if(totalchart){
        const t = totalchart.data;
        // console.log(t);
        yield put({
          type:'updateState',
          payload:{
            chartNumber: t,
          }
        })
      }
    },
    *overspend(_,{call,put}){
      const overspend = yield call(api.getOverSpend);
      if(overspend){
        const d = overspend.data;
        // console.log(d);
        yield  put({
          type:'updateState',
          payload:{
            overSpend: d,
          }
        })
      }
    },
    *coststructure(_,{call,put}){
      const coststructure = yield call(api.getcoststructure);
      if(coststructure){
        const d = coststructure.data;
        // console.log(d);
        yield  put({
          type:'updateState',
          payload:{
            Cost: d,
          }
        })
      }
    },
    *resourceUse(_,{call,put}){
      const resourceUse = yield call(api.getresourceUse);
      if(resourceUse){
        const d = resourceUse.data;
        // console.log(d);
        yield  put({
          type:'updateState',
          payload:{
            Resource: d,
          }
        })
      }
    },
    *case(_,{call,put}){
      const casegroup = yield call(api.getCase);
      if(casegroup){
        const d = casegroup.data;
        // console.log(d);
        yield  put({
          type:'updateState',
          payload:{
            caseGroup: d,
          }
        })
      }
    },
    // * changePassword({ payload, callback }, { call, select }) {
    //   const { userId } = yield select(_ => _[namespace].userInfo);
    //   const params = {
    //     id: userId,
    //     ...payload
    //   };
    //   const data = yield call(api.postPassword, params);
    //   if (data.httpCode === 200) {
    //     message.success('修改成功');
    //     callback(true);
    //   } else {
    //     callback(false, data);
    //   }
    // },
  },
  reducers: {
    updateState: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    clear: () => cloneDeep(initialState),
  },
};
