import ACTION_TYPES from "./actionTypes"

export const loginUserAction = (payload) => ({
    type: ACTION_TYPES.LOGIN_USER_REQUEST,
    payload
})

export const loginUserSuccess = (data) => ({
    type: ACTION_TYPES.LOGIN_USER_SUCCESS,
    data
})

export const loginUserError = (error) => ({
    type: ACTION_TYPES.LOGIN_USER_ERROR,
    error
})

export const registerUserAction = (payload) => ({
    type: ACTION_TYPES.REGISTER_USER_REQUEST,
    payload
})

export const registerUserSuccess = (data) => ({
    type: ACTION_TYPES.REGISTER_USER_SUCCESS,
    data
})

export const registerUserError = (error) => ({
    type: ACTION_TYPES.REGISTER_USER_ERROR,
    error
})


export const sendNewMessageAction = (data) => ({
    type: ACTION_TYPES.SEND_NEW_MESSAGE_REQUEST,
    data
})

export const sendNewMessageSuccess = (data) => ({
    type: ACTION_TYPES.SEND_NEW_MESSAGE_SUCCESS,
    data
})

export const sendNewMessageError = (error) => ({
    type: ACTION_TYPES.SEND_NEW_MESSAGE_ERROR,
    error
})


export const getUserChatsAction = () => ({
    type: ACTION_TYPES.GET_USER_CHATS_REQUEST
})

export const getUserChatsSuccess = (data) => ({
    type: ACTION_TYPES.GET_USER_CHATS_SUCCESS,
    data
})

export const getUserChatsError = (error) => ({
    type: ACTION_TYPES.GET_USER_CHATS_ERROR,
    error
})