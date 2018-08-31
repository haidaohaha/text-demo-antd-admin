
import { createStore } from "redux";

import reducer from "./../reducer/toduMenu";

const initialState = {
    menuName: ''
}
const configureStore = () => createStore(reducer, initialState);

export default configureStore;






