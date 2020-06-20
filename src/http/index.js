// 封装请求  导入import
import axios from 'axios'

// 创建一个axios实例
const service = axios.create({
  // 请求的基础路径,如果配置了基础路径，基础路径在实际发请求的时候可以省略
  baseURL: '/api',
  // 超时时间(单位：ms)
  timeout: 10000
})

// 响应拦截
service.interceptors.response.use(res => {
  return res.data
})

// 默认导出export
export default service