import ACTION_TYPES from "./actionTypes"

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