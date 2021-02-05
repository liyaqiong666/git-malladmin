// 定义请求方式
export const Method = {
    GET: "get",
    POST: "post",
    PUT:'PUT',
}
  
export const PATH = {
    // 登录
    LOGIN: '/manage/user/login.do',
    // 退出登录
    LOGOUT:'/user/logout.do',
    // 商品管理
    SHOPP: '/manage/product/list.do',
    // 修改状态
    UPDATE_STATUS:'/manage/product/set_sale_status.do',
    // 查询
    SEARCH: '/manage/product/search.do',
    // 商品管理==查看详情
    SHOP_DETAIL:'/manage/product/detail.do?',
    // 商品管理==添加商品
    SAVE_SHOP:'/manage/product/save.do?',
    // 品类管理
    OTHER: '/manage/category/get_category.do',
    // 订单管理
    ORDER: 'manage/order/list.do',
}
  