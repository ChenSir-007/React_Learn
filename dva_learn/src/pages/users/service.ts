import request, { extend } from 'umi-request';
import {message} from 'antd';

const errorHandler = function(error) {
  if (error.response) {
    if(error.response.status > 400){
      message.error(error.data.message ? error.data.message:error.data);
    }
    // 请求已发送但服务端返回状态码非 2xx 的响应
  } else {
    // 请求初始化时出错或者没有响应返回的异常
    message.error('Network Error');
  }

  // throw error; // 如果throw. 错误将继续抛出.

  // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
  // return {some: 'data'};
};
const extendRequest = extend({ errorHandler });

async function getRemoteList(/*{page, per_page}*/) {
   return extendRequest('http://public-api-v1.aspirantzhang.com/users', {
    method: 'get',
  })
    .then(function(response) {
      // console.log(response);
      return response
    })
    .catch(function(error) {
      console.log(error);
      return false;
    });

  // return data;
}

async function editRecord({id, values}) {
  return extendRequest(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
    method: 'put',
    data: values,
  })
    .then(function(response) {
      // console.log(response);
      // console.log('ok')
      message.success('Edit successfully');
      return response
    })
    .catch(function(error) {
      // console.log(error);
      message.error('Edit Failed');
    });

  // return data;
}

async function deleteRecord(id) {
  return extendRequest(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
    method: 'delete',
    // data: values,
  })
    .then(function(response) {
      // console.log(response);
      // console.log('ok')
      // return response
      message.success('Delete successfully');
    })
    .catch(function(error) {
      // console.log(error);
      message.error('Delete Failed');
    });

  // return data;
}

async function addRecord(values) {
  return extendRequest('http://public-api-v1.aspirantzhang.com/users', {
    method: 'post',
    data: values,
  })
    .then(function(response) {
      // console.log(response);
      // console.log('ok')
      // return response
      message.success('Add successfully');
    })
    .catch(function(error) {
      // console.log(error);
      message.error('Add Failed');
    });

  // return data;
}

export {getRemoteList,editRecord,deleteRecord,addRecord};

