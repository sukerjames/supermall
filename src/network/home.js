import {request, requstGoods} from './request'

//首页不止一个请求，我们都封装在一个js文件中。
// 到时候要改或者查只用在这个文件来就行了，不用导出找。并且耦合度没那么高。
// 多个需要访问首页的路径都可以在这里请求。
export function getHomeMultidata () {
  return request({
    url: '/home/multidata',
  })
};

export function getHomeGoods(type, page) {
  return requstGoods({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
