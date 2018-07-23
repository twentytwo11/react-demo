//合并项目内的多个reducer

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo'

export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action),
        userInfo:userInfo(state.userInfo,action)
    }
}