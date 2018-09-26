import { type } from './../action';

const initState = { ebikeData: { menuName: '首页' } };

const ebikeData = (state = initState, action) => {
    switch (action.type) {
        case type.SWITCH_MENU:
            return {
                ...state,
                ...action.playload
            };
        default:
            return state;
    }
};

export default ebikeData;
