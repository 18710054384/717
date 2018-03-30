import { UPDATE_GOODS_COUNT } from '../../store/reducer'
export  default function mapDispatchToProps(dispatch){
    return {
        updateCount(count,id){
            dispatch({
                type:UPDATE_GOODS_COUNT,
                data:count,
                id
            })
        }
    }
}