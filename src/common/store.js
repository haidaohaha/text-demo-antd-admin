import { handleActions, createAction } from 'redux-actions';

export const type = {
    MENUNAME: 'MENUNAME'
};

const getCommonData = createAction('getPub');
const getMenuName = createAction(type.MENUNAME);

export const actions = {
    getMenuName
};

export default handleActions(
    {
        [getCommonData]: (state, { payload }) => ({
            ...state,
            public: payload.public
        }),
        [getMenuName]: (state, { payload }) => ({
            ...state,
            menuName: payload
        })
    },
    {
        public: true,
        menuName: '首页'
    }
);
