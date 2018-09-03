import { type } from './../action';

const initState = {
    menuName: '首页'
};
// What is not so important
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
