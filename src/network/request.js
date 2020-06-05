import axios from 'axios';

export function request(config) {
  // 1.创建对应的axios的实例
  const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
  });

  // 2.axios的拦截器
  //全局拦截
  /* axios.interceptors.request;
  axios.interceptors.response; */
  //2.1 局部请求拦截
  //两个参数，请求中的参数，我们拿到一个成功和一个失败
  //成功拿到的是请求的config配置参数
  instance.interceptors.request.use(
    config => {
      //console.log(config);
      //拦截之后要把数据放出去给axios去请求。
      return config;
  }, error => {
      console.log(error);
  });

  //2.2 响应拦截
  //两个参数，响应中的参数，我们拿到一个成功和一个失败
  //成功拿到的是响应的拿到的结果，一般我们都返回服务器的结果
  instance.interceptors.response.use(
    res => {
      //console.log(res);
      //console.log("request result"+ res.data);
      return res.data;
  }, err => {
      console.log(err);
  });

  //3.发送真正的网络请求,这边返回的就是axios，axios本身就是一个Promise。
  return instance(config)
}

export function requstGoods(config) {
  const instanceGoods = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: '5000'
  });

  instanceGoods.interceptors.request.use(
    config => {
    return config;
  }, err => {
    console.log(err);
  });

  instanceGoods.interceptors.response.use(
    res => {
    return res.data;
  }, err => {
    console.log(err);
  });

  return instanceGoods(config);
}
