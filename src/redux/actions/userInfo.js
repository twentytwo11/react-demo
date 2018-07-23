export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST"
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS"
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL"

function getUserInfoRequest() {
    //请求中
    return{
        type:GET_USER_INFO_REQUEST
    }
}
function getUserInfoSuccess(userInfo) {
    console.log('getsuccess-----',userInfo)
    //请求成功
    return{
        type:GET_USER_INFO_SUCCESS,
        userInfo:userInfo
    }
}
function getUserInfoFail() {
    //请求失败
    return{
        type:GET_USER_INFO_FAIL
    }
}

export function getUserInfo() {
    return function (dispatch) {
        dispatch(getUserInfoRequest());

        return fetch('http://localhost:8082/api/user.json')
            .then(response => {
                // if(response.status == 200) {
                //    // const json = response.json()
                //    //  if(json) {
                //         console.log('resolve----', response)
                //         console.log(response.json())
                //         dispatch(getUserInfoSuccess({}))
                //         return ;
                //   //  }
                // }
                // dispatch(getUserInfoFail())
                // var a = response.json()
                // console.log(a);
                return response.json()
            })
            .then(
                (data) => {
                    console.log('data----',data)
                    dispatch(getUserInfoSuccess(data))
                }
            )
            .catch(
                (err) => {
                    console.log('catcherr-----',err)
                    dispatch(getUserInfoFail())
                }
            )
    }
}