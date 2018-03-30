const fs = require('fs')
const jwt = require('jsonwebtoken')
module.exports=function(app){
    //设置跨域
    app.all('*',function(req,res,next){
        res.header("Access-Control-Allow-Origin","http://localhost:3000")
        res.header("Access-Control-Allow-Headers","Content-Type,Token")//允许设置请求头字段
        res.header("Content-Type","application/json;charset=utf-8")//响应文件类型
        next()
    })

    // //商品列表
    // app.post('/mall/index/getGoodsChannel',function(req,res){
    //     console.log(req.body)
    //     res.end(JSON.stringify({
    //         "code":1
    //     }))

    // })

    //注册接口
    app.post('/user/register',function(req,res){
        let user = fs.readFileSync('user.json',{encoding:"utf-8"})
        user=JSON.parse(user)
        user.push(req.body)
        fs.writeFile('user.json',JSON.stringify(user),function(){
            res.end(JSON.stringify({
                "success":1,
                "info":"注册成功！"
            }))
        })
        
    })

    //登录接口
    app.post('/user/login',function(req,res){
        let user = fs.readFileSync(__dirname+'/user.json',{encoding:"utf-8"})
        user=JSON.parse(user)
        let login = req.body
        let resInfo={
            "success":0,
            "info":"用户名或密码错误！",
            "token":''
        }
        user.forEach(user=>{
            if(user.username==login.username && user.password==login.password){
                resInfo.success=1,
                resInfo.info="登录成功！"
            }
        })
        if(resInfo.success==1){
            resInfo.token=jwt.sign(login,'1511',{
                expiresIn:60*60
            })
        }
        res.end(JSON.stringify(resInfo))
    })

    //首页数据接口
    let data = require('./mock.js')
    app.post('/mell/index/getGoodsChannel',function(req,res){
        res.end(JSON.stringify({
            "code":1,
            "data":data
        }))
    })

    //添加购物车
    app.post('/user/shoppingCart',function(req,res){
        jwt.verify(req.body.token,'1511',(err,decoded)=>{
            if(err){
                res.end(JSON.stringify({
                    success:0,
                    info:"登录过期，请重新登录",
                    detail:err.TokenExpiredError
                }))
            }else{
                let cartInfo = JSON.parse(fs.readFileSync(__dirname+'/cart_info.json',{encoding:'utf-8'}))
                if(cartInfo[decoded.username]){
                    cartInfo[decoded.username].push(req.body.goods_info)
                }else{
                    cartInfo[decoded.username]=[req.body.goods_info]
                }
                fs.writeFile(__dirname+'/cart_info.json',JSON.stringify(cartInfo),function(){
                    res.end('1')
                })
            }
        })
        res.end(JSON.stringify({
            success:1,
            info:'添加成功！'
        }))
    })

    //分类页
    app.get('/catagory',function(req,res){
        console.log(req.body)
        let catagory = JSON.parse(fs.readFileSync(__dirname+'/catagory.json'))
        res.end(JSON.stringify({
            success:1,
            data:catagory
        }))
    })

    //购物车接口
    app.post('/user/cart',function(req,res){
        jwt.verify(req.body.token,'1511',(err,decoded)=>{
            if(err){
                res.end(JSON.stringify({
                    success:0,
                    info:'没有账户信息',
                    detail:err.TokenExpiredError
                }))
            }else{
                let cartInfo = JSON.parse(fs.readFileSync(__dirname+'/cart_info.json',{encoding:'utf-8'}))
                res.end(JSON.stringify({
                    data:cartInfo[decoded.username]
                }))
            } 
            res.end(JSON.stringify({
                "success":1
            }))
        })
       
    })

    app.listen(9000,function(){
        console.log('server listen 9000')
    })
}