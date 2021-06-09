let HOST = '';

if (process.env.NODE_ENV === 'development') {
  // HOST = 'http://172.16.3.40';
  // HOST = 'http://172.16.9.69:5100';
}

export const host = HOST;

export const drg = '/drg/api/drg/';
export const turkey = '/torch/api/turkey/';
export const torch = '/torch/api/torch/';
export const appPlatform = '/torch/api/appPlatform/';
