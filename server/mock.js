let Mock = require('mockjs')

let datas = []
for(let i=0;i<8;i++){
    datas.push(Mock.mock({
        "goods_id": i+1,
        "goods_name":"@ctitle(20,30)",
        "discount_price|10-100":1,
        "goods_img":`../src/static/img/goods/${i+1}.jpg`,
        "store_id|":i+1,
        "store_name":"@ctitle(5,15)"
    }))
}

let data = Mock.mock({
    "success":1,
    "info":"请求成功",
    "code":"1001",
    "list":datas
})

module.exports=data