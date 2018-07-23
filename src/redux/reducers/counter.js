import {INCREMENT,DECREMENT,RESET} from 'actions/counter'
//初始化状态
const initState = {
    count:0
}

//功能执行
//reducer用于改变state的纯函数，接收旧的state和action，返回新的state
export default function reducer (state = initState ,action){
    switch (action.type){
        case INCREMENT:
            return{
                count:state.count + 1
            }
        case DECREMENT:
            return{
                count:state.count -1
            }
        case RESET:
            return{
                count:0
            }
        default:
            return state
    }
}