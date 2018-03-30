import {combineReducers} from 'redux'

//添加购物车
export const ADD_CART = 'ADD_CART';
//删除商品
export const DELETE_CART = 'DELETE_CART';
//改变商品数量
export const UPDATE_GOODS_COUNT = 'UPDATE_GOODS_COUNT'

let initState = {
    cart_list:[]
}

function cart_list(state = initState.cart_list,action){
    switch(action.type){
        case ADD_CART:
        let flag = false;
        state.forEach((item,index)=>{
            if(item.goods_id==action.data.goods_id){
                ++item.count;
                flag=true;
            }
        })
        return flag ? [...state] : [...state,action.data]
        break;
    }
    return state
}



export default combineReducers({
    cart_list
})