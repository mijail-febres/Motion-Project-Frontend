export const updateUser = user => (dispatch, getState) => {
    const action = {
        type: 'updateUser',
        payload : user
    }
    dispatch(action)
}

export const updatePass = pass => (dispatch, getState) => {
    const action = {
        type: 'updatePass',
        payload : pass
    }
    dispatch(action)
}

export const updateToken = token => (dispatch, getState) => {
    const action = {
        type: 'updateToken',
        payload : token
    }
    dispatch(action)
}

export const getUserInfo = userInfo => (dispatch, getState) => {
    const action = {
        type: 'getUserInfo',
        payload : userInfo
    }
    dispatch(action)
}