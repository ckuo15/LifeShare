import * as UserAPIUtil from '../utils/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const fetchUser = (userId) => dispatch => {
    return UserAPIUtil.fetchUser(userId).then((user) => dispatch(receiveUser(user)))
};

export const updateUser = (formData, sessionId) => dispatch => {
    return UserAPIUtil.updateUser(formData,sessionId).then((user) => dispatch(receiveUser(user)))
};