// 合并所有reducer 并且返回
import { combineReducers } from 'redux';
import ebikeData from './reducers/ebikeData.redux';
import updateLoading from './reducers/updateLoading.redux';

export default combineReducers({ ebikeData, updateLoading });
