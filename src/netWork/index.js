// 引入core文件
import { request } from "./config"
// 引入config文件
import { Method, PATH } from "./core"

const netClient = {
    // 登录
    LOGIN(username, password) {
        return request(Method.POST, PATH.LOGIN + '?' + `username=${username}&password=${password}`)
    },
    // 退出登录
    LOGOUT(){
        return request(Method.POST, PATH.LOGOUT)
    },
    // 商品管理
    SHOPP(num = 1) {
        return request(Method.GET, PATH.SHOPP + '?' + `pageNum=${num}`)
    },
    // 修改状态
    UPDATE_STATUS(id,status) {
        return request(Method.GET, PATH.UPDATE_STATUS + `?productId=${id}&status=${status}`)
    },
    // 商品管理==详情
    SHOP_DETAIL(id){
        return request(Method.GET, PATH.SHOP_DETAIL + `productId=${id}`)
    },
    // 商品管理==添加商品
    SAVE_SHOP(categoryId,name,subtitle,subImages,detail,price,stock,status){
        return request(Method.GET, PATH.SAVE_SHOP + `categoryId=${categoryId}&name=${name}&subtitle=${subtitle}&subImages=${subImages}&price=${price}&stock=${stock}&status=1`)
    },
    // 品类管理
    OTHER() {
        return request(Method.GET, PATH.OTHER + "?" + `categoryId=0`)
    },
    // 查询
    SEARCH(status, name) {
        return request(Method.GET, PATH.SEARCH + '?' + `listType=${status}&pageNum=1&productName=${name}`)
    },
    // 订单管理
    ORDER(num = 1) {
        return request(Method.GET, PATH.ORDER + '?' + `pageNum=${num}`)
    },
}

// 抛出netClient
export default netClient;
