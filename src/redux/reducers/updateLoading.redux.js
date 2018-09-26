import { type } from './../action';

const initState = { loading: false, userName: '' };

const updateLoading = (state = initState, action) => {
    switch (action.type) {
        case type.UPDATE_LOADING:
            return {
                ...state,
                loading: action.playload
            };
        case type.UPDATE_NAME:
            return {
                ...state,
                userName: action.playload
            };
        default:
            return state;
    }
};

export default updateLoading;
