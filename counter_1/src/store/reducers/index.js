import { combineReducers } from 'redux';
import counter from './counter';

const AllReducers = combineReducers({ counter })

export default AllReducers;