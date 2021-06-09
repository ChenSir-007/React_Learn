import request from '@/utils/request';
import { appPlatform } from '@/utils/config';

export function postUserInfo() {
  return request.post(`user/toUserInfo`, {
    prefix: appPlatform,
  });
}

// 菜单
export function postMenu() {
  return request.post(`user/toUserRoleMenuList`, {
    prefix: appPlatform,
  });
}

// 角色
export function postRole() {
  return request.post(`user/toUserRoleList`, {
    prefix: appPlatform,
  });
}

// 修改角色
export function postChangeRole(params) {
  return request.post(`user/userChangeRole`, {
    data: params,
    prefix: appPlatform,
  });
}

// 退出登录
export function logout() {
  return request.post(`security/user/logout`, {
    prefix: appPlatform,
  });
}

// 修改密码
export function postPassword(params) {
  return request.post(`sysUser/modifyPassword`, {
    data: params,
    prefix: appPlatform,
  });
}


export function sendLogs(param) {
  return request('pub/v2/addSysOperateLog', {
    prefix: appPlatform,
    encrypted: false,
    data: param,
  });
}

export function getRole(){
  return request.get('api/role',{
    prefix:''
  })
}

export function getUserInfo(){
  return request.get('api/UserInfo',{
    prefix:''
  })
}

export function getTotalChart(){
  // console.log('hi');
  return request.get('api/TotalChart',{
    prefix:''
  })
}

export function getOverSpend(){
  return request.get('api/overspend',{
    prefix:''
  })
}

export function getcoststructure(){
  return request.get('api/coststructure',{
    prefix:''
  })
}

export function getresourceUse(){
  return request.get('api/resourceUse',{
    prefix:''
  })
}

export function getCase(){
  return request.get('api/case',{
    prefix:''
  })
}


