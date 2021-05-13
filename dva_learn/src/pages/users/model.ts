import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import {getRemoteList, editRecord, deleteRecord, addRecord} from './service';

interface UserModelType {
  namespace: 'users',
  state: {},
  reducers: {
    save: Reducer;
  },
  effects: {
    query: Effect;
    edit: Effect;
    delete: Effect;
    add: Effect;
  },
  subscriptions: {
    setup: Subscription;
  }
}

const UserModel: UserModelType = {
  namespace: 'users',

  state: {
    name: '',
  },

  //异步
  effects: {
    *query({ payload }, { call, put }) {
      const data = yield call(getRemoteList);
      console.log(data)
      if(data){
        yield put({
          type: 'save',
          payload: data,
        })
      }
      // yield put()
    },
    *edit({ payload:{id, values} }, { call, put }) {
      const data = yield call(editRecord,{id,values});
      yield put({type:'query'})//重新刷新页面
      // console.log(data)
      // console.log(id)
      // console.log(values)
    },
    *delete({payload},{call,put,select}){
      // console.log(yield select (state => state.users.page))
      yield call(deleteRecord,payload)
      yield put({type:'query'})
    },
    *add({ payload }, { call, put }) {
      const data = yield call(addRecord,payload);
      yield put({type:'query'})//重新刷新页面
      // console.log(data)
      // console.log(id)
      // console.log(values)
    },
  },
  //同步
  //action = type+payload
  reducers: {
    save(state, action) {
      return action.payload;
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  //订阅
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          //触发
          // dispatch({
          //   type: 'query',
          // });
        }
      });
    },
  },
};

export default UserModel;
