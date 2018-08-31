import { type } from './../action';

const initState = {};
const ebikeData = (state = initState, action) => {
    switch (action.type) {
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName: action.playload
            };
        default:
            return state;
    }
};

export default ebikeData;
