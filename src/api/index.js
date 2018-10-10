import http from '@/utils/http'
import totalConfig from '../../config'
const config = process.env === 'development' ? totalConfig.dev : totalConfig.build

const API_URL = {
  //获取订单列表
  fetchOrderList:{
    method:'GET',
    url:'/api/v1/orders'
  }
}

const API = {}

Object.keys(API_URL).forEach(key=>{
  const item = API_URL[key];
  switch(item.method){
    case 'GET':
      API[key]=function(params){
        return http.get(`${config.baseUrl}${item.url}`,params)
      }
      break
    case 'POST':
      API[key]=function(params){
        return http.post(`${config.baseUrl}${item.url}`,params)
      }
      break
    case 'DELETE':
      API[key]=function(params){
        return http.delete(`${config.baseUrl}${item.url}`,params)
      }
      break
    default:
      API[key]=function(params){
        return http.get(`${config.baseUrl}${item.url}`,params)
      }
  }
})

export default API