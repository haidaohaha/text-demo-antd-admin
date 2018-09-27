import { handleActions, createAction } from 'redux-actions';

export const type = {
    UPDATE_LOADING: 'UPDATE_LOADING',
    UPDATE_NAME: 'UPDATE_NAME'
};

const clickUpdateLoading = createAction(type.UPDATE_LOADING);
const updateName = createAction(type.UPDATE_NAME);

export const actions = {
    clickUpdateLoading,
    updateName
};

export default handleActions(
    {
        [clickUpdateLoading]: (state, { payload }) => ({
            ...state,
            loading: payload
        }),
        [updateName]: (state, { payload }) => ({
            ...state,
            userName: payload
        })
    },
    {
        loading: false
    }
);
